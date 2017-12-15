import * as Rx from 'rxjs'
import * as assert from 'assert'
import * as proxyquire from 'proxyquire'
import * as sinon from 'sinon'
import * as DynamoDB from './'

describe('Output - DynamoDB', () => {
  let DynamoDBMock
  let putSpy
  let deleteSpy
  let updateSpy
  let AwsDynamoDBMock

  beforeEach(() => {
    putSpy = global.sandbox.stub()
    deleteSpy = global.sandbox.spy()
    updateSpy = global.sandbox.spy()

    class DocumentClientMock {
      constructor(config) {}
      put(...args) {
        putSpy.apply(this, args)
      }
      delete(...args) {
        deleteSpy.apply(this, args)
      }
      update(...args) {
        updateSpy.apply(this, args)
      }
    }

    AwsDynamoDBMock = {
      DocumentClient: DocumentClientMock
    }

    DynamoDBMock = proxyquire('.', {
      'aws-sdk/clients/dynamodb': AwsDynamoDBMock
    })
  })

  describe('PUT operation', () => {
    const exampleParams = {
      my: 'example',
      obj: 'object'
    }
    const examplePutObj = {
      operation: DynamoDB.Operations.PUT,
      params: exampleParams
    } as DynamoDB.Message

    it('performs a put call on aws if we pass a PUT Message', done => {
      const outStreamInput = new DynamoDBMock().create()
      outStreamInput(examplePutObj).subscribe(
        ...global.baseSubscriber(examplePutObj, done)
      )

      assert(putSpy.called)
      assert(putSpy.getCalls().length === 1)
      assert.equal(putSpy.getCall(0).args[0], exampleParams)

      const callback = putSpy.getCall(0).args[1]
      assert(callback instanceof Function)

      callback(null, {})
    })

    describe('Error handling', () => {
      it('outputs an error if the aws call failed', done => {
        const outStreamInput = new DynamoDBMock().create()
        const error = new Error('put error message')

        outStreamInput(examplePutObj).subscribe(
          () => {},
          err => {
            assert.deepEqual(err, error)
            done()
          }
        )

        assert(putSpy.called)
        assert(putSpy.getCalls().length === 1)
        assert.equal(putSpy.getCall(0).args[0], exampleParams)

        const callback = putSpy.getCall(0).args[1]
        assert(callback instanceof Function)

        callback(error.message, {})
      })
      it('retries N times if we add "retry" parameter in the message', done => {
        const outStreamInput = new DynamoDBMock().create()
        const error = new Error('put error message')
        const inputOutputMsg = {
          ...examplePutObj,
          retry: 3
        } as DynamoDB.Message

        const scheduler = new Rx.TestScheduler(() => true)

        const test = outStreamInput(inputOutputMsg, scheduler)

        global.sandbox.stub(console, 'error')

        putSpy.onCall(0).callsArgWith(1, error, {})
        putSpy.onCall(1).callsArgWith(1, error, {})
        putSpy.onCall(2).callsArgWith(1, null, {})

        test.subscribe(
          msg => {
            try {
              assert.deepEqual(msg, inputOutputMsg)
              assert(putSpy.getCalls().length === 3)
              done()
            } catch (err) {
              done(err)
            }
          },
          err => done(err)
        )
        scheduler.flush()
      })
      it('retries N times if we add "retry" parameter in the message w/ "retryWhen" backpressure times', done => {
        const outStreamInput = new DynamoDBMock().create()
        const error = new Error('put error message')
        const retryDelay = msg => Rx.Observable.of(100, 300)
        const inputOutputMsg = {
          ...examplePutObj,
          retry: 3,
          retryDelay
        } as DynamoDB.Message

        const scheduler = new Rx.TestScheduler((a, b) => {
          assert.deepEqual(a, b)
          done()
        })

        const test = outStreamInput(inputOutputMsg, scheduler)

        global.sandbox.stub(console, 'error')

        putSpy.onCall(0).callsArgWith(1, error, {})
        putSpy.onCall(1).callsArgWith(1, error, {})
        putSpy.onCall(2).callsArgWith(1, null, {})

        // At the 200th "frame" (100ms delayed retry * 2), expect a value and complete
        scheduler.expectObservable(test).toBe('--------------------(a|)', {
          a: inputOutputMsg
        })
        scheduler.flush()
      })
      it('Fires an error if after N delayed retries it still fails', done => {
        const outStreamInput = new DynamoDBMock().create()
        const error = new Error('put error message')
        const retryDelaySpy = global.sandbox.spy()
        const retryDelay = msg => {
          retryDelaySpy(msg)
          return Rx.Observable.of(100)
        }
        const inputOutputMsg = {
          ...examplePutObj,
          retry: 4,
          retryDelay
        } as DynamoDB.Message

        const scheduler = new Rx.TestScheduler(() => true)

        const test = outStreamInput(inputOutputMsg, scheduler)

        global.sandbox.stub(console, 'error')

        putSpy.onCall(0).callsArgWith(1, error, {})
        putSpy.onCall(1).callsArgWith(1, error, {})
        putSpy.onCall(2).callsArgWith(1, error, {})
        putSpy.onCall(3).callsArgWith(1, error, {})

        test.subscribe(
          msg => done('Message received, expected error'),
          (err: Error) => {
            try {
              assert.equal(retryDelaySpy.getCalls().length, 4)
              assert.equal(err.message, 'Operation failed after 4 attempts')
              done()
            } catch (err) {
              done(err)
            }
          },
          () => {}
        )
        scheduler.flush()
      })
      it('Ignores errors if the error.code is specified in the config IGNORE_ERRORS param', done => {
        const outStreamInput = new DynamoDBMock({
          IGNORE_ERRORS: [
            { code: 'ConditionalCheckFailedException' },
            {
              code: 'ResourceNotFoundException',
              message: 'Test specific message ignored'
            }
          ]
        } as DynamoDB.Config).create()

        const expectedPutObjs = [examplePutObj, examplePutObj]
        const expectedException = {
          code: 'ResourceNotFoundException',
          message: 'Error Message'
        }

        Rx.Observable
          .merge(
            outStreamInput(examplePutObj),
            outStreamInput(examplePutObj),
            outStreamInput(examplePutObj)
          )
          .subscribe(
            msg => {
              assert.deepEqual(msg, expectedPutObjs.shift())
            },
            e => {
              assert.deepEqual(e, new Error(expectedException.toString()))
              if (!expectedPutObjs.length) {
                done()
              } else {
                done(new Error('Not all values expected were emitted'))
              }
            }
          )

        assert(putSpy.called)
        assert(putSpy.getCalls().length === 3)
        let callback
        callback = putSpy.getCall(0).args[1]
        callback(
          {
            code: 'ConditionalCheckFailedException',
            message: 'Test specific message ignored'
          },
          {}
        )
        callback = putSpy.getCall(1).args[1]
        callback(
          {
            code: 'ResourceNotFoundException',
            message: 'Test specific message ignored'
          },
          {}
        )
        callback = putSpy.getCall(2).args[1]
        callback(expectedException, {})
      })
    })
  })

  describe('DELETE operation', () => {
    const exampleParams = {
      my: 'example',
      obj: 'object'
    }
    const exampleDeleteObj = {
      operation: DynamoDB.Operations.DELETE,
      params: exampleParams
    } as DynamoDB.Message

    it('performs a delete call on aws if we pass a DELETE Message', done => {
      const outStreamInput = new DynamoDBMock().create()
      outStreamInput(exampleDeleteObj).subscribe(
        ...global.baseSubscriber(exampleDeleteObj, done)
      )

      assert(deleteSpy.called)
      assert(deleteSpy.getCalls().length === 1)
      assert.equal(deleteSpy.getCall(0).args[0], exampleParams)

      const callback = deleteSpy.getCall(0).args[1]
      assert(callback instanceof Function)

      callback(null, {})
    })

    describe('Error handling', () => {
      it('outputs an error if the aws call failed', done => {
        const outStreamInput = new DynamoDBMock().create()
        const error = new Error('put error message')

        outStreamInput(exampleDeleteObj).subscribe(
          () => {},
          err => {
            assert.deepEqual(err, error)
            done()
          }
        )

        assert(deleteSpy.called)
        assert(deleteSpy.getCalls().length === 1)
        assert.equal(deleteSpy.getCall(0).args[0], exampleParams)

        const callback = deleteSpy.getCall(0).args[1]
        assert(callback instanceof Function)

        callback(error.message, {})
      })
    })
  })

  describe('UPDATE operation', () => {
    const exampleParams = {
      my: 'example',
      obj: 'object'
    }
    const exampleUpdateObj = {
      operation: DynamoDB.Operations.UPDATE,
      params: exampleParams
    } as DynamoDB.Message

    it('performs an update call on aws if we pass an UPDATE Message', done => {
      const outStreamInput = new DynamoDBMock().create()
      outStreamInput(exampleUpdateObj).subscribe(
        ...global.baseSubscriber(exampleUpdateObj, done)
      )

      assert(updateSpy.called)
      assert(updateSpy.getCalls().length === 1)
      assert.equal(updateSpy.getCall(0).args[0], exampleParams)

      const callback = updateSpy.getCall(0).args[1]
      assert(callback instanceof Function)

      callback(null, {})
    })

    describe('Error handling', () => {
      it('outputs an error if the aws call failed', done => {
        const outStreamInput = new DynamoDBMock().create()
        const error = new Error('put error message')

        outStreamInput(exampleUpdateObj).subscribe(
          () => {},
          err => {
            assert.deepEqual(err, error)
            done()
          }
        )

        assert(updateSpy.called)
        assert(updateSpy.getCalls().length === 1)
        assert.equal(updateSpy.getCall(0).args[0], exampleParams)

        const callback = updateSpy.getCall(0).args[1]
        assert(callback instanceof Function)

        callback(error.message, {})
      })
    })
  })
})
