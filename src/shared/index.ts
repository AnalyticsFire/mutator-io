import { Observable, Observer } from 'rxjs'

export function wrapToObservable (value: Observable<any> | Promise<any> | any): Observable<any> {
  if (value instanceof Observable) {
    return value
  } else if (value instanceof Promise) {
    return Observable.fromPromise(value)
  } else {
    return Observable.of(value)
  }
}
