import { PassThrough } from './pass-through'
import { Observable } from 'rxjs'

export interface TransformStream {
  (message: Object): any
  subscriptionId?: string
}

export const transformStreams = {
  PassThrough
}
