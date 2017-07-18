import 'mocha'
import * as assert from 'assert'

declare global {
  export module NodeJS {
    interface Global {
      baseSubscriber(expected: any, done: Function): Array<Function>
    }
  }
}

global.baseSubscriber = (expected, done) => [
  (msg) => {
    assert.deepEqual(msg, expected)
    done()
  },
  (e) => done(new Error(e))
]
