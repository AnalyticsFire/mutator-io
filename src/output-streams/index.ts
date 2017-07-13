import { ReplaySubject } from 'rxjs'
import { ObservableInput } from 'rxjs/Observable'
import * as DynamoDB from './dynamodb'

export interface SubjectWrapper {
  (msg: Object): ObservableInput<Object>
}

export interface OutputStream {
  create(): SubjectWrapper
}

export const outputStreams = {
  DynamoDB
}
