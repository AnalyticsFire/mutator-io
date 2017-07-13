import { passThrough } from './pass-through'
import { Observable } from 'rxjs'

export interface TransformStream {
    (message: Object): Observable<Object>
}

export const transformStreams = {
  passThrough
}
