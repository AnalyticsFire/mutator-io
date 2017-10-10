import * as assert from 'assert'
import * as proxyquire from 'proxyquire'
import * as sinon from 'sinon'
import { Observable, Subject } from 'rxjs'
import logger from '../src/logger'
import {
  MutatorIO,
  InputStream,
  OutputStream,
  TransformStream,
  Subscription
} from '../src/'

describe('MutatorIO', () => {
  const mockInputStream = {
    create: () => mockInput
  } as InputStream<any>
  const mockOutputStream = {
    create: () => (msg) => Observable.of(msg + 'output add')
  } as OutputStream

  const MutatorIOMock = proxyquire('../src/mutator-io', {
    './logger': logger
  })

  let mockInput
  let loggerSpy
  let mutatorIO

  beforeEach(() => {
    mockInput = new Subject()
    loggerSpy = global.sandbox.spy(logger, 'info')
    mutatorIO = new MutatorIOMock([
      {
        name: 'custom-pipe1',
        in: mockInputStream,
        out: mockOutputStream
      }
    ] as Array<MutatorIO.Pipe>, {
      LOG_LEVEL: 'NONE'
    })
  })

  it('adds a transformer to the list and returns a subscription item', () => {
    const sub = mutatorIO.transform('custom-pipe1', msg => msg)
    assert.deepEqual(Object.keys(mutatorIO.transformers), ['custom-pipe1'])
    assert(sub instanceof Subscription)
  })

  it('composes a stream made from input + transform + output', () => {
    const transformStream = (msg) => msg + ' transform add '
    const sub = mutatorIO.transform('custom-pipe1', transformStream as TransformStream)

    mutatorIO.start()
    mockInput.next('input add')

    assert(loggerSpy.getCalls().length === 2)
    assert(loggerSpy.lastCall.args[0] === 'input add transform add output add')
  })

  it('composes a stream with just input + output (no transform)', () => {
    mutatorIO.start()
    mockInput.next('input add ')

    assert(loggerSpy.getCalls().length === 2)
    assert(loggerSpy.lastCall.args[0] === 'input add output add')
  })

  describe('Subscription', () => {
    it('contains a unique ID', () => {
      const transformStream = (msg) => msg + ' transform add '
      const sub = mutatorIO.transform('custom-pipe1', transformStream as TransformStream)
      assert(sub.id.length === 36)
    })

    it('calling unsubscribe stops the related stream', () => {
      const transformStream = (msg) => msg + ' transform add '
      const sub = mutatorIO.transform('custom-pipe1', transformStream as TransformStream)

      mutatorIO.start()

      mockInput.next('input add')
      sub.unsubscribe()
      mockInput.next('another input add')

      assert(loggerSpy.getCalls().length === 3)
    })
  })
})
