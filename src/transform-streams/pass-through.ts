import { TransformStream } from './'
import { Observable } from 'rxjs'

export const PassThrough: TransformStream = (message) => Observable.of(message)
