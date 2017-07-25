import * as AwsDynamoDB from 'aws-sdk/clients/dynamodb'
import { Observable, Observer, ReplaySubject } from 'rxjs'
import { OutputStream } from './'

class DynamoDB implements OutputStream {
  client: AwsDynamoDB.DocumentClient

  constructor (config: DynamoDB.Config = {}) {
    this.client = new AwsDynamoDB.DocumentClient(config)
  }

  create () {
    return (msg: DynamoDB.Message) => {
      return Observable.of(msg)
        .flatMap((msg: DynamoDB.Message) => {
          if (!msg) {
            return Observable.empty()
          }

          return Observable.create((observer: Observer<Object>) => {
            if (!msg.operation) {
              return observer.error(new Error('The format of the message for this output stream is invalid'))
            }

            const method = this.client[msg.operation]
            method.call(this.client, msg.params || {}, (error, data) => {
              if (error) {
                return observer.error(new Error(error))
              }
              observer.next(msg)
            })
          })
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
    operation: Operations
    params: Object
  }

  export interface Config extends AwsDynamoDB.Types.DocumentClient.DocumentClientOptions {
  }
}

export = DynamoDB
