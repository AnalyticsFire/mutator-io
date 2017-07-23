import { Observable } from 'rxjs'
import * as PassThrough from './pass-through'

export interface TransformStream {
  (message: Object): any
  subscriptionId?: string
}

export {
  PassThrough
}
