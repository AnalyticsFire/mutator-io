import * as mqtt from 'mqtt'
import { IClientOptions } from 'mqtt/types'
import { Observable, Observer } from 'rxjs'
import { InputStream } from 'mutator-io'

class Mqtt implements InputStream<Mqtt.Message> {
  client: mqtt.MqttClient

  constructor(config: Mqtt.Config) {
    const { topics, ...opts } = config
    this.client = mqtt.connect(opts)
    this.client.subscribe(topics)

    // TODO: Fix these cases and handle them in test coverage
    this.client.on('connect', e => {
      console.log('connect')
    })
    this.client.on('error', e => {
      console.error(e)
    })
    this.client.on('close', e => {
      console.log('close')
    })
    this.client.on('offline', e => {
      console.log('offline')
    })
    this.client.on('reconnect', e => {
      console.log('reconnect')
    })
  }

  create() {
    return Observable.fromEvent(this.client, 'message', (topic, payload) => ({
      topic,
      payload
    })).map(({ topic, payload }) => {
      // TODO: Pipe buffer payload into a more performant JSON parser
      let parsedPayload = payload.toString()
      try {
        parsedPayload = JSON.parse(parsedPayload)
      } catch (e) {}
      return { topic, payload: parsedPayload }
    })
  }
}

namespace Mqtt {
  export interface Message {
    topic: string
    payload: Object
  }

  export interface Config extends IClientOptions {
    topics: string[]
  }
}

export = Mqtt
