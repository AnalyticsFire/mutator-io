import * as assert from 'assert'
import * as shared from '../../src/shared'
import PassThrough from '../../src/output-streams/pass-through'

describe('Output - PassThrough', () => {
  const exampleObj = { my: 'example', obj: 'object' }
  let outStreamInput

  beforeEach(() => {
    outStreamInput = (new PassThrough()).create()
  })

  it('passes the value provided in the input to an output', (done) => {
    shared.wrapToObservable(
      outStreamInput(exampleObj)
    ).subscribe(...global.baseSubscriber(exampleObj, done))
  })
})
