import { Observable } from 'rxjs'
import { IScheduler } from 'rxjs/Scheduler'

export interface OutputStreamCreateMethod {
  (msg: Object, scheduler?: IScheduler): Observable<any>
}

export interface OutputStream {
  create(): OutputStreamCreateMethod
}
