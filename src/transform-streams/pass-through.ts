import { TransformStream } from './'
import { Observable } from 'rxjs'

export const passThrough : TransformStream = (message) => Observable.of(message)
