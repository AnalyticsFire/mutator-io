import { Observable } from 'rxjs'
import * as PassThrough from './pass-through'
import * as DynamoDB from './dynamodb'

export interface OutputStreamCreateMethod {
  (msg: Object): Observable<Object>
}

export interface OutputStream {
  create(): OutputStreamCreateMethod
}

export const outputStreams = {
  PassThrough,
  DynamoDB
}
