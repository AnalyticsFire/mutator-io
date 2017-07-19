import 'mocha'
import * as assert from 'assert'
import * as sinon from 'sinon'

declare global {
  export module NodeJS {
    interface Global {
      baseSubscriber(expected: any, done: Function): Array<Function>
      sandbox: any
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

global.sandbox = sinon.sandbox.create()

afterEach(() => {
  global.sandbox.restore()
})
