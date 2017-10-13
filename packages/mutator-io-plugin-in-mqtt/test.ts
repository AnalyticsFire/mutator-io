import * as assert from 'assert'
import * as proxyquire from 'proxyquire'
import * as sinon from 'sinon'
import * as events from 'events'
import * as Mqtt from './'

describe('Input - Mqtt', () => {
  const exampleObj = { my: 'example', obj: 'object' }
  const exampleTopics = ['myTopic', 'myOtherTopic']
  let subscribeSpy
  let MqttClientEventEmitter
  let MqttClientMock
  let mqttInstance

  beforeEach(() => {
    subscribeSpy = global.sandbox.spy()
    MqttClientEventEmitter = Object.assign({}, events.EventEmitter.prototype, {
      subscribe: subscribeSpy
    })
    MqttClientMock = {
      connect: opts => MqttClientEventEmitter
    }

    const Mqtt = proxyquire('.', {
      mqtt: MqttClientMock
    })

    mqttInstance = new Mqtt({
      topics: exampleTopics
    } as Mqtt.Config)
  })

  it('starts the stream and subscribes to topics when the client connects', () => {
    mqttInstance.create().subscribe()

    assert(!subscribeSpy.called)

    MqttClientEventEmitter.emit('connect')

    assert(subscribeSpy.called)
    assert(subscribeSpy.getCalls().length === 2)
    assert(subscribeSpy.getCall(0).args[0] === exampleTopics[0])
    assert(subscribeSpy.getCall(0).args[1] instanceof Function)
  })

  it('pipes the mqtt client messages out of the stream when the client connects', done => {
    const exampleValue = { some: 'example', val: [1, 2, 3] }
    const expectedValue = {
      topic: exampleTopics[0],
      payload: exampleValue
    } as Mqtt.Message

    mqttInstance
      .create()
      .subscribe(...global.baseSubscriber(expectedValue, done))

    assert(!subscribeSpy.called)

    MqttClientEventEmitter.emit('connect')

    assert(subscribeSpy.called)
    assert(subscribeSpy.getCalls().length === 2)

    const callback1 = subscribeSpy.getCall(0).args[1]
    const callback2 = subscribeSpy.getCall(1).args[1]
    // We need to call both callbacks to make forJoin happy
    callback1()
    callback2()

    MqttClientEventEmitter.emit(
      'message',
      exampleTopics[0],
      JSON.stringify(exampleValue)
    )
  })

  it('works if the message is not a valid JSON', done => {
    const exampleValue = { some: 'example', val: [1, 2, 3] }
    const expectedValue = {
      topic: exampleTopics[0],
      payload: '{"some":"example","val":[1,2,3]'
    } as Mqtt.Message

    mqttInstance
      .create()
      .subscribe(...global.baseSubscriber(expectedValue, done))

    assert(!subscribeSpy.called)

    MqttClientEventEmitter.emit('connect')

    assert(subscribeSpy.called)
    assert(subscribeSpy.getCalls().length === 2)

    const callback1 = subscribeSpy.getCall(0).args[1]
    const callback2 = subscribeSpy.getCall(1).args[1]
    // We need to call both callbacks to make forJoin happy
    callback1()
    callback2()

    MqttClientEventEmitter.emit(
      'message',
      exampleTopics[0],
      JSON.stringify(exampleValue).slice(0, -1)
    )
  })

  describe('Error handling', () => {
    it('outputs an error in the error stream callback when the client cannot connect', done => {
      const errorMsg = 'my error'
      mqttInstance.create().subscribe(
        () => {},
        err => {
          assert(err === errorMsg)
          done()
        }
      )

      assert(!subscribeSpy.called)
      MqttClientEventEmitter.emit('error', errorMsg)
      assert(!subscribeSpy.called)
    })

    it('outputs an error in the error stream callback when the client cannot subscribe', done => {
      const errorMsg = 'my subscribe error'
      mqttInstance.create().subscribe(
        () => {},
        err => {
          assert(err === errorMsg)
          done()
        }
      )

      assert(!subscribeSpy.called)
      MqttClientEventEmitter.emit('connect')
      assert(subscribeSpy.called)
      assert(subscribeSpy.getCalls().length === 2)

      const callback = subscribeSpy.getCall(0).args[1]
      callback(errorMsg)
    })
  })
})
