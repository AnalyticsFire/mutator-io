import { Observable } from 'rxjs'
import { OutputStream } from './'

export default class PassThrough implements OutputStream {
  create () {
    return (message) => Observable.of(message)
  }
}
