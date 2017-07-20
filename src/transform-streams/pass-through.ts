import { TransformStream } from './'
import { Observable } from 'rxjs'

export const PassThrough: TransformStream = (message) => message
