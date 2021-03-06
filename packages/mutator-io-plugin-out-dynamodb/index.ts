import * as AwsDynamoDB from 'aws-sdk/clients/dynamodb'
import { Observable, Observer } from 'rxjs'
import { OutputStream } from 'mutator-io'

declare global {
  interface SymbolConstructor {
    observable: symbol
  }
}

class DynamoDB implements OutputStream<DynamoDB.Message> {
  client: AwsDynamoDB.DocumentClient

  static defaultConfig: DynamoDB.Config = {
    IGNORE_ERRORS: []
  }

  constructor(public config: DynamoDB.Config = {}) {
    this.config = { ...DynamoDB.defaultConfig, ...config }
    this.client = new AwsDynamoDB.DocumentClient(this.config)
  }

  create() {
    return (msg: DynamoDB.Message, scheduler) => {
      return Observable.of(msg).flatMap((msg: DynamoDB.Message) => {
        if (!msg) {
          return Observable.empty()
        }

        let awsOperationStream = Observable.of(msg).flatMap(() =>
          Observable.create((observer: Observer<Object>) => {
            if (!msg.operation) {
              return observer.error(
                new Error(
                  'The format of the message for this output stream is invalid'
                )
              )
            }

            let method = this.client[msg.operation]
            method.call(this.client, msg.params || {}, (error, data) => {
              if (error) {
                const isIgnored = (this.config.IGNORE_ERRORS || []).find(
                  (err: DynamoDB.IgnorableError) =>
                    error.code === err.code &&
                    (!err.message || error.message === err.message)
                )

                if (!isIgnored) {
                  return observer.error(new Error(error))
                }
              }
              observer.next(msg)
              observer.complete()
            })

            return () => {
              method = null
            }
          })
        )

        if (msg.retry) {
          awsOperationStream = awsOperationStream.retryWhen(error => {
            return error
              .do(err => console.error(err))
              .scan((acc, err) => acc + 1, 0)
              .flatMap(errorCount => {
                const retryDelay = msg.retryDelay || (() => Observable.of(0))
                let delayStream = retryDelay.call(this, msg)

                if (!(delayStream && delayStream[Symbol.observable])) {
                  console.warn('retryDelay should return a valid Observable')
                  delayStream = Observable.of(0)
                }

                return delayStream.first().map(delay => [errorCount, delay])
              })
              .flatMap(([count, delay]) => {
                if (count > msg.retry - 1) {
                  return Observable.throw(
                    new Error(`Operation failed after ${msg.retry} attempts`)
                  )
                }
                return Observable.of(count).delay(delay, scheduler)
              })
          })
        }

        return awsOperationStream
      })
    }
  }
}

namespace DynamoDB {
  export enum Operations {
    PUT = 'put',
    DELETE = 'delete',
    UPDATE = 'update'
  }

  export interface RetryDelay {
    (msg: any): Observable<number>
  }

  export interface Message {
    operation: Operations
    params: Object
    retry?: number
    retryDelay?: RetryDelay
  }

  export interface IgnorableError {
    code: String
    message?: String
  }

  export interface Config
    extends AwsDynamoDB.Types.DocumentClient.DocumentClientOptions,
      AwsDynamoDB.Types.ClientConfiguration {
    IGNORE_ERRORS?: Array<IgnorableError>
  }
}

export = DynamoDB
