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
    try {
      assert.deepEqual(msg, expected)
      done()
    } catch (e) {
      done(e)
    }
  },
  (e) => done(new Error(e))
]

global.sandbox = sinon.sandbox.create()

afterEach(() => {
  global.sandbox.restore()
})
