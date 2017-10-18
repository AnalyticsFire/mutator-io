import { Observable } from 'rxjs'

export interface TransformStream<T> {
  (message: any): Observable<T> | Promise<T> | T
  subscriptionId?: string
}
