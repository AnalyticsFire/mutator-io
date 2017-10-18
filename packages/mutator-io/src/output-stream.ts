import { Observable } from 'rxjs'
import { IScheduler } from 'rxjs/Scheduler'

export interface OutputStreamCreateMethod<T> {
  (msg: T, scheduler?: IScheduler): any
}

export interface OutputStream<T> {
  create(): OutputStreamCreateMethod<T>
}
