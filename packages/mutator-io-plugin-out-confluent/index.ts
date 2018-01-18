import { Kafka, Publisher } from 'sinek'
import * as avro from 'avsc'
import { Client as RestClient } from 'node-rest-client'
import { Observable, Observer } from 'rxjs'
import { OutputStream } from 'mutator-io'

class Confluent implements OutputStream<Confluent.Message> {
  client: Kafka
  restClient: RestClient
  workers: number
  schemaURL: string
  schemaIds: [number, number]
  schemas: [avro.Type, avro.Type]
  topic: string // NOTE: Maybe we should support multiple topics?
  observable: Observable<any>
  publisher: Publisher

  constructor(config: Confluent.Config) {
    // TODO: logger, avro-less config, etc.
    this.client = new Kafka(config.broker, console, true)
    this.client.becomeProducer([config.topic], config.group)
    this.workers = config.workers || 1
    this.restClient = new RestClient()
    this.schemaURL = config.schemaRegistry
    this.topic = config.topic

    this.observable = Observable.fromEvent(this.client, 'ready')
      .first()
      .flatMap(() => this.resolve(config.schemas, config.subject))
      .map(
        ([keySchema, valueSchema]) =>
          (this.schemaIds = [keySchema, valueSchema])
      )
      .map(
        () =>
          (this.schemas = [
            avro.Type.forSchema(config.schemas.key),
            avro.Type.forSchema(config.schemas.value)
          ])
      )
      .map(() => (this.publisher = new Publisher(this.client)))
    this.observable.subscribe()
  }

  create() {
    return (msg: Confluent.Message, scheduler) => {
      const send = () => {
        return Observable.of(this.encode(msg)).flatMap(encoded =>
          Observable.fromPromise(
            this.publisher.send(this.topic, [encoded[1]], encoded[0])
          )
        )
      }
      if (this.publisher) {
        return send()
      } else return Observable.forkJoin(this.observable).flatMap(() => send())
    }
  }

  private encode(msg: Confluent.Message, length: number = 1024) {
    return [
      this.encodeWithSchema(msg.key, this.schemas[0], this.schemaIds[0]),
      this.encodeWithSchema(msg.value, this.schemas[1], this.schemaIds[1])
    ]
  }

  private encodeWithSchema(
    data: Object,
    schema: avro.Type,
    schemaId: number,
    length: number = 1024
  ) {
    const buffer = new Buffer(length)
    buffer[0] = 0 // Magic, always zero
    buffer.writeInt32BE(schemaId, 1) // Schema id
    const pos = schema.encode(data, buffer, 5) // Avro encoded data
    if (pos < 0) {
      return this.encodeWithSchema(data, schema, schemaId, length - pos)
    }
    return buffer
  }

  private resolve(schemas: { key: Object; value: Object }, subject: string) {
    return Observable.zip(
      this.resolveWithSuffix(schemas.key, subject, 'key'),
      this.resolveWithSuffix(schemas.value, subject, 'value')
    )
  }

  private resolveWithSuffix(schema: Object, subject: string, suffix: string) {
    var args = {
      data: JSON.stringify({ schema: JSON.stringify(schema) }),
      headers: { 'Content-Type': 'application/vnd.schemaregistry.v1+json' }
    }
    const cb = this.restClient.post as (
      url: string,
      args: Object,
      cb: (data) => {}
    ) => Observable<{}>
    return Observable.bindCallback(cb, data => JSON.parse(data))(
      `http://${this.schemaURL}/subjects/${subject}-${suffix}/versions`,
      args
    ).map(data => data.id)
  }
}

namespace Confluent {
  export interface Message {
    key: Object
    value: Object
  }

  export interface Config {
    broker: string
    schemaRegistry: string
    workers?: number
    subject: string
    schemas: { key: Object; value: Object }
    topic: string
    group: string
  }
}

export = Confluent
