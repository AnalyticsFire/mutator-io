import { Observable } from 'rxjs'
import * as DynamoDB from './dynamodb'

export interface SubjectWrapper {
  (msg: Object): Observable<Object>
}

export interface OutputStream {
  create(): SubjectWrapper
}

export const outputStreams = {
  DynamoDB
}
