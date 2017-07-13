import * as mqtt from 'mqtt'
import { Observable, Observer } from 'rxjs'
import { InputStream } from './'

export declare interface MqttMessage {
  topic: string,
  payload: Object
}

export interface Config extends Object {
  url: string,
  topics: string[]
}

export class Mqtt implements InputStream {
  client: mqtt.MqttClient
  clientObs: Observable<mqtt.MqttClient>
  topics: string[]

  constructor (config: Config) {
    const { url, topics } = config
    this.topics = topics
    this.client = mqtt.connect(url)
    this.clientObs = Observable.create((observer: Observer<any>) => {
      this.client.on('connect', () => {
        console.log('connect')
        observer.next(this.client)
      })
      this.client.on('error', (e) => {
        console.log('err')
        observer.error(e)
      })
      this.client.on('close', (e) => {
        console.log('close')
      })
      this.client.on('offline', (e) => {
        console.log('offline')
      })
      this.client.on('reconnect', (e) => {
        console.log('reconnect')
      })
      return () => this.client.end()
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
