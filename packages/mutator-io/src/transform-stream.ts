import { Observable } from 'rxjs'

export interface TransformStream {
  (message: Object): any
  subscriptionId?: string
}
