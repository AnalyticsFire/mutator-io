import * as AwsDynamoDB from 'aws-sdk/clients/dynamodb'
import { Observable, Observer, ReplaySubject } from 'rxjs'
import { OutputStream } from './'

export enum Operations {
  PUT = 'put',
  DELETE = 'delete'
}

export interface DynamoDBMessage {
  operation: Operations
  params: Object
}

export default class DynamoDB implements OutputStream {
  client: AwsDynamoDB.DocumentClient

  constructor (config: AwsDynamoDB.Types.DocumentClient.DocumentClientOptions) {
    this.client = new AwsDynamoDB.DocumentClient(config)
  }

  create () {
    return (msg: DynamoDBMessage) => {
      return Observable.of(msg)
        .flatMap((msg: DynamoDBMessage) => {
          return Observable.create((observer: Observer<Object>) => {
            const method = this.client[msg.operation]
            method.call(this.client, msg.params || {}, (error, data) => {
              if (error) {
                return observer.error(error)
              }
              observer.next(msg)
            })
          })
        })
    }
  }
}
