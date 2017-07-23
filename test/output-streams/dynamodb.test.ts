import * as assert from 'assert'
import * as proxyquire from 'proxyquire'
import * as sinon from 'sinon'
import * as outputStreams from '../../src/output-streams'

describe('Output - DynamoDB', () => {
  let outStreamInput
  let putSpy
  let deleteSpy
  let AwsDynamoDBMock

  beforeEach(() => {
    putSpy = global.sandbox.spy()
    deleteSpy = global.sandbox.spy()

    class DocumentClientMock {
      constructor (config) { }
      put (...args) { putSpy.apply(this, args) }
      delete (...args) { deleteSpy.apply(this, args) }
    }

    AwsDynamoDBMock = {
      DocumentClient: DocumentClientMock
    }

    const DynamoDBMock = proxyquire('../../src/output-streams/dynamodb', {
      'aws-sdk/clients/dynamodb': AwsDynamoDBMock
    })

    outStreamInput = (new DynamoDBMock()).create()
  })

  describe('PUT operation', () => {
    const exampleParams = {
      my: 'example',
      obj: 'object'
    }
    const examplePutObj = {
      operation: outputStreams.DynamoDB.Operations.PUT,
      params: exampleParams
    } as outputStreams.DynamoDB.Message

    it('performs a put call on aws if we pass a PUT DBMessage', (done) => {
      outStreamInput(examplePutObj)
        .subscribe(...global.baseSubscriber(examplePutObj, done))

      assert(putSpy.called)
      assert(putSpy.getCalls().length === 1)
      assert.equal(putSpy.getCall(0).args[0], exampleParams)

      const callback = putSpy.getCall(0).args[1]
      assert(callback instanceof Function)

      callback(null, {})
    })

    describe('Error handling', () => {
      it('outputs an error if the aws call failed', (done) => {
        const errorMsg = 'put error message'

        outStreamInput(examplePutObj)
          .subscribe(() => { }, (err) => {
            assert(err === errorMsg)
            done()
          })

        assert(putSpy.called)
        assert(putSpy.getCalls().length === 1)
        assert.equal(putSpy.getCall(0).args[0], exampleParams)

        const callback = putSpy.getCall(0).args[1]
        assert(callback instanceof Function)

        callback(errorMsg, {})
      })
    })
  })

  describe('DELETE operation', () => {
    const exampleParams = {
      my: 'example',
      obj: 'object'
    }
    const exampleDeleteObj = {
      operation: outputStreams.DynamoDB.Operations.DELETE,
      params: exampleParams
    } as outputStreams.DynamoDB.Message

    it('performs a delete call on aws if we pass a DELETE DBMessage', (done) => {
      outStreamInput(exampleDeleteObj)
        .subscribe(...global.baseSubscriber(exampleDeleteObj, done))

      assert(deleteSpy.called)
      assert(deleteSpy.getCalls().length === 1)
      assert.equal(deleteSpy.getCall(0).args[0], exampleParams)

      const callback = deleteSpy.getCall(0).args[1]
      assert(callback instanceof Function)

      callback(null, {})
    })

    describe('Error handling', () => {
      it('outputs an error if the aws call failed', (done) => {
        const errorMsg = 'put error message'

        outStreamInput(exampleDeleteObj)
          .subscribe(() => { }, (err) => {
            assert(err === errorMsg)
            done()
          })

        assert(deleteSpy.called)
        assert(deleteSpy.getCalls().length === 1)
        assert.equal(deleteSpy.getCall(0).args[0], exampleParams)

        const callback = deleteSpy.getCall(0).args[1]
        assert(callback instanceof Function)

        callback(errorMsg, {})
      })
    })
  })
})
