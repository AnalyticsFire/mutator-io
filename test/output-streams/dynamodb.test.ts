import * as assert from 'assert'
import * as proxyquire from 'proxyquire'
import * as sinon from 'sinon'
import { DynamoDBMessage, Operations } from '../../src/output-streams/dynamodb'

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

    const DynamoDB = proxyquire('../../src/output-streams/dynamodb', {
      'aws-sdk/clients/dynamodb': AwsDynamoDBMock
    }).default

    outStreamInput = (new DynamoDB()).create()
  })

  describe('PUT operation', () => {
    const exampleParams = {
      my: 'example',
      obj: 'object'
    }
    const examplePutObj = {
      operation: Operations.PUT,
      params: exampleParams
    } as DynamoDBMessage

    it('performs a put call on aws if we pass a PUT DynamoDBMessage', (done) => {
      outStreamInput(examplePutObj)
        .subscribe(...global.baseSubscriber(examplePutObj, done))

      assert(putSpy.called)
      assert(putSpy.getCalls().length === 1)
      assert.equal(putSpy.getCall(0).args[0], exampleParams)

      const callback = putSpy.getCall(0).args[1]
      assert(callback instanceof Function)

      callback(null, {})
    })

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

  describe('DELETE operation', () => {
    const exampleParams = {
      my: 'example',
      obj: 'object'
    }
    const exampleDeleteObj = {
      operation: Operations.DELETE,
      params: exampleParams
    } as DynamoDBMessage

    it('performs a delete call on aws if we pass a DELETE DynamoDBMessage', (done) => {
      outStreamInput(exampleDeleteObj)
        .subscribe(...global.baseSubscriber(exampleDeleteObj, done))

      assert(deleteSpy.called)
      assert(deleteSpy.getCalls().length === 1)
      assert.equal(deleteSpy.getCall(0).args[0], exampleParams)

      const callback = deleteSpy.getCall(0).args[1]
      assert(callback instanceof Function)

      callback(null, {})
    })

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
