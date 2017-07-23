import { Observable } from 'rxjs'
import { OutputStream } from './'

class PassThrough implements OutputStream {
  create () {
    return (message) => message
  }
}

module PassThrough {}

export = PassThrough
