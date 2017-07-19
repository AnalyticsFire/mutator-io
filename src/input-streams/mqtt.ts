import * as mqtt from 'mqtt'
import { IClientOptions } from 'mqtt/types'
import { Observable, Observer } from 'rxjs'
import { InputStream } from './'

export interface MqttMessage {
  topic: string,
  payload: Object
}

export interface Config extends IClientOptions {
  topics: string[]
}

export default class Mqtt implements InputStream {
  client: mqtt.MqttClient
  clientObs: Observable<mqtt.MqttClient>
  topics: string[]

  constructor (config: Config) {
    const { topics, ...opts } = config
    this.topics = topics
    this.client = mqtt.connect(opts)
    this.clientObs = Observable.create((observer: Observer<any>) => {
      this.client.on('connect', () => {
        observer.next(this.client)
      })
      this.client.on('error', (e) => {
        observer.error(e)
      })
      // TODO: Fix these cases and handle them in test coverage
      this.client.on('close', (e) => {
        console.log('close')
      })
      this.client.on('offline', (e) => {
        console.log('offline')
      })
      this.client.on('reconnect', (e) => {
        console.log('reconnect')
      })
    })
  }

  create () {
    return this.clientObs
      .flatMap((client) => {
        const observables = this.topics.map((topic): Observable<any> => {
          return Observable.create((observer: Observer<Object>) => {
            client.subscribe(topic, (err) => {
              err ? observer.error(err) : observer.next({})
              observer.complete()
            })
          })
        })
        return Observable
          .forkJoin(observables)
          .flatMap((): Observable<MqttMessage> => {
            return Observable.create((observer: Observer<MqttMessage>) => {
              client.on('message', (topic, payload) => {
                // TODO: Pipe buffer payload into a more performant JSON parser
                let parsedPayload = payload.toString()
                try {
                  parsedPayload = JSON.parse(parsedPayload)
                } catch (e) {}
                observer.next({ topic, payload: parsedPayload })
              })
            })
          })
      })
  }
}
