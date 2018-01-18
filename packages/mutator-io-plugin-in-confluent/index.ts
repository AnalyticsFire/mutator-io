import { Kafka, Drainer } from 'sinek'
import * as avro from 'avsc'
import { Client as RestClient } from 'node-rest-client'
import { Observable, Observer } from 'rxjs'
import { InputStream } from 'mutator-io'

class Confluent implements InputStream<Confluent.Message> {
  client: Kafka
  restClient: RestClient
  workers: number
  registry: { [key: number]: avro.Type }
  schemaURL: string

  constructor(config: Confluent.Config) {
    // TODO: logger
    this.client = new Kafka(config.broker, console, true)
    this.client.becomeConsumer(config.topics, config.group, {
      autoCommit: false
    })
    this.workers = config.workers || 1
    this.registry = {}
    this.restClient = new RestClient()
    this.schemaURL = config.schemaRegistry
  }

  controlled() {
    return true
  }

  create() {
    return Observable.fromEvent(this.client, 'ready')
      .first()
      .map(() => new Drainer(this.client, this.workers, false, false, true))
      .flatMap(drainer =>
        Observable.fromEventPattern(
          h => drainer.drain(h),
          null,
          (message, done) => [message.key, message.value, done]
        )
      )
      .flatMap(([key, value, done]) =>
        Observable.zip(
          this.decode(key),
          this.decode(value),
          Observable.of(done)
        )
      )
      .map(([key, value, done]) => [{ key, value }, done] as Confluent.Message)
  }

  private decode(data) {
    // TODO: add logging, checks, etc.
    if (typeof data === 'string') {
      data = new Buffer(data, 'binary')
    }
    const id = data.slice(1, 5).readInt32BE()
    return this.resolve(id).map(type => type.fromBuffer(data.slice(5)))
  }

  private resolve(id) {
    let scheme = this.registry[id]
    if (scheme) {
      return Observable.of(scheme)
    }
    const cb = this.restClient.get as (
      url: string,
      cb: (data) => {}
    ) => Observable<{}>
    return Observable.bindCallback(cb, data => JSON.parse(data))(
      `http://${this.schemaURL}/schemas/ids/${id}`
    )
      .map(data => JSON.parse(data.schema))
      .map(schema => avro.Type.forSchema(schema, { registry: this.registry }))
      .do(type => (this.registry[id] = type))
  }
}

namespace Confluent {
  export interface Message extends Array<any> {
    0: {
      key: Object
      value: Object
    }
    1: () => any
  }

  export interface Config {
    broker: string
    schemaRegistry: string
    workers?: number
    topics: string[]
    group: string
  }
}

export = Confluent
