import { Observable } from 'rxjs'

export interface OutputStreamCreateMethod {
  (msg: Object): Observable<any>
}

export interface OutputStream {
  create(): OutputStreamCreateMethod
}
