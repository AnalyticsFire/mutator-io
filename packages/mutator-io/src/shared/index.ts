import { Observable, Observer } from 'rxjs'

declare global {
    interface SymbolConstructor {
        observable: symbol
    }
}

export function wrapToObservable (value: Observable<any> | Promise<any> | any): Observable<any> {
  if (value && value[Symbol.observable]) {
    return value
  } else if (value instanceof Promise) {
    return Observable.fromPromise(value)
  } else {
    return Observable.of(value)
  }
}
