import * as assert from 'assert'
import { PassThrough } from '../../src/transform-streams/pass-through'

describe('PassThrough', () => {
  it('passes the value provided in the input to an output', (done) => {
    const exampleObj = { my: 'example', obj: 'object' }
    PassThrough(exampleObj).subscribe(...global.baseSubscriber(exampleObj, done))
  })
})
