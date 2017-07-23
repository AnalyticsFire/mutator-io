import { Observable } from 'rxjs'
import * as DynamoDB from './dynamodb'
import * as PassThrough from './pass-through'

export interface OutputStreamCreateMethod {
  (msg: Object): Observable<Object>
}

export interface OutputStream {
  create(): OutputStreamCreateMethod
}

export {
  DynamoDB,
  PassThrough
}
