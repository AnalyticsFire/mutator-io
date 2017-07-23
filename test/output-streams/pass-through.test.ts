import * as assert from 'assert'
import * as shared from '../../src/shared'
import * as outputStreams from '../../src/output-streams'

describe('Output - PassThrough', () => {
  const exampleObj = { my: 'example', obj: 'object' }
  let outStreamInput

  beforeEach(() => {
    outStreamInput = (new outputStreams.PassThrough()).create()
  })

  it('passes the value provided in the input to an output', (done) => {
    shared.wrapToObservable(
      outStreamInput(exampleObj)
    ).subscribe(...global.baseSubscriber(exampleObj, done))
  })
})
