import { Observable } from 'rxjs'
import * as Mqtt from './mqtt'

export interface InputStream {
  create(): Observable<Object>
}

export {
  Mqtt
}
