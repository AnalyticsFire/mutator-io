import * as assert from 'assert'
import * as shared from '../../src/shared'
import { Observable } from 'rxjs'

describe('Shared methods', () => {
  describe('wrapToObservable', () => {
    const exampleObj = { my: 'example', obj: 'object' }

    it("wraps the value provided into an observable if it's an Object", done => {
      const obs = shared.wrapToObservable(exampleObj)
      assert(obs instanceof Observable)
      obs.subscribe(...global.baseSubscriber(exampleObj, done))
    })

    it("wraps the value provided into an observable if it's a Promise", done => {
      const obs = shared.wrapToObservable(Promise.resolve(exampleObj))
      assert(obs instanceof Observable)
      obs.subscribe(...global.baseSubscriber(exampleObj, done))
    })

    it("returns the same value we provide if it's an Observable", done => {
      const initialObs = Observable.of(exampleObj)
      const obs = shared.wrapToObservable(initialObs)
      assert(obs === initialObs)
      obs.subscribe(...global.baseSubscriber(exampleObj, done))
    })
  })
})
