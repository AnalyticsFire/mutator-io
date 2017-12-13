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

  it('starts the stream and subscribes to topics during client initialization', () => {
    assert(subscribeSpy.called)
    assert.equal(subscribeSpy.getCalls().length, 1)
    assert.equal(subscribeSpy.getCall(0).args[0], exampleTopics)
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

    MqttClientEventEmitter.emit(
      'message',
      exampleTopics[0],
      JSON.stringify(exampleValue)
    )
  })

  it('handles the error if the message is not a valid JSON', done => {
    const exampleValue = { some: 'example', val: [1, 2, 3] }
    const expectedValue = {
      topic: exampleTopics[0],
      payload: '{"some":"example","val":[1,2,3]'
    } as Mqtt.Message

    mqttInstance
      .create()
      .subscribe(...global.baseSubscriber(expectedValue, done))

    MqttClientEventEmitter.emit(
      'message',
      exampleTopics[0],
      JSON.stringify(exampleValue).slice(0, -1)
    )
  })

  it('keeps working if the message is not a valid JSON', done => {
    const exampleValue = { some: 'example', val: [1, 2, 3] }
    const expectedValues = [
      {
        topic: exampleTopics[0],
        payload: '{"some":"example","val":[1,2,3]'
      } as Mqtt.Message,
      {
        topic: exampleTopics[0],
        payload: { some: 'example', val: [1, 2, 3] }
      } as Mqtt.Message
    ]

    mqttInstance.create().subscribe(
      msg => {
        assert.deepEqual(msg, expectedValues.shift())

        if (!expectedValues.length) {
          done()
        }
      },
      e => done(new Error(e))
    )

    MqttClientEventEmitter.emit(
      'message',
      exampleTopics[0],
      JSON.stringify(exampleValue).slice(0, -1)
    )

    MqttClientEventEmitter.emit(
      'message',
      exampleTopics[0],
      JSON.stringify(exampleValue)
    )
  })
})
