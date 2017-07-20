import * as assert from 'assert'
import * as shared from '../../src/shared'
import { PassThrough } from '../../src/transform-streams/pass-through'

describe('Transform - PassThrough', () => {
  it('passes the value provided in the input to an output', (done) => {
    const exampleObj = { my: 'example', obj: 'object' }
    shared.wrapToObservable(
      PassThrough(exampleObj)
    ).subscribe(...global.baseSubscriber(exampleObj, done))
  })
})
