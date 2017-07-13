import * as AwsDynamoDB from 'aws-sdk/clients/dynamodb'
import { Observable, Observer, Subject } from 'rxjs'
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
  subject: Subject<Object>
  subjectObs: Observable<Object>

  constructor (config: AwsDynamoDB.Types.DocumentClient.DocumentClientOptions) {
    this.client = new AwsDynamoDB.DocumentClient(config)
  }

  create () {
    this.subject = new Subject()

    this.subjectObs = this.subject
      .asObservable()
      .flatMap((msg: DynamoDBMessage) => Observable.create((observer: Observer<Object>) => {
        const method = this.client[msg.operation]
        method.call(this.client, msg.params || {}, (error, data) => {
          if (error) {
            return observer.error(error)
          }
          observer.next(data)
        })
      }))

    return (msg: DynamoDBMessage) => {
      this.subject.next(msg)
      return this.subjectObs
    }
  }
}
