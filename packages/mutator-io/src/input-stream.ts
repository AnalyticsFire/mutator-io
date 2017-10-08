import { Observable } from 'rxjs'

export interface InputStream<T> {
  create(): Observable<T>
}
