import * as AwsDynamoDB from 'aws-sdk/clients/dynamodb'
import { Observable, Observer, ReplaySubject, TestScheduler } from 'rxjs'
import { OutputStream } from 'mutator-io'

declare global {
  interface SymbolConstructor {
      observable: symbol
  }
}

class DynamoDB implements OutputStream {
  client: AwsDynamoDB.DocumentClient

  constructor (config: DynamoDB.Config = {}) {
    this.client = new AwsDynamoDB.DocumentClient(config)
  }

  create () {
    return (msg: DynamoDB.Message, scheduler: TestScheduler) => {
      return Observable.of(msg)
        .flatMap((msg: DynamoDB.Message) => {
          if (!msg) {
            return Observable.empty()
          }

          let awsOperationStream = Observable.of(msg)
            .flatMap(() => Observable.create((observer: Observer<Object>) => {
              if (!msg.operation) {
                return observer.error(new Error('The format of the message for this output stream is invalid'))
              }

              const method = this.client[msg.operation]
              method.call(this.client, msg.params || {}, (error, data) => {
                if (error) {
                  return observer.error(new Error(error))
                }
                observer.next(msg)
                observer.complete()
              })
            })
            )

          if (msg.retry) {
            awsOperationStream = awsOperationStream.retryWhen((error) => {
              const retryDelay = msg.retryDelay || (() => Observable.of(0))
              let delayStream = retryDelay.call(this, error)

              if (!(delayStream && delayStream[Symbol.observable])) {
                console.warn('retryDelay should return a valid Observable')
                delayStream = Observable.of(0)
              }
              return delayStream
                .flatMap((delay) =>
                  error
                    .do((err) => console.error(err))
                    .scan((acc, err) => acc + 1, 0)
                    .flatMap((count) => {
                      if (count > msg.retry) {
                        return Observable.throw(new Error(`Operation failed after ${msg.retry} attempts`))
                      }
                      return Observable.of(count).delay(delay, scheduler)
                    })
                )
            })
          }

          return awsOperationStream
        })
    }
  }
}

module DynamoDB {
  export enum Operations {
    PUT = 'put',
    DELETE = 'delete',
    UPDATE = 'update'
  }

  export interface Message {
    operation: Operations,
    params: Object,
    retry?: number,
    retryDelay?: Function
  }

  export interface Config extends AwsDynamoDB.Types.DocumentClient.DocumentClientOptions, AwsDynamoDB.Types.ClientConfiguration {
  }
}

export = DynamoDB
