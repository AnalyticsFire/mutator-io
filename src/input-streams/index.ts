import { Observable } from 'rxjs'
import { Mqtt } from './mqtt'

export interface InputStream {
  create(): Observable<Object>
}

export const inputStreams = {
  Mqtt
}
