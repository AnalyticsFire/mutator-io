import * as c from 'colors/safe'
import * as winston from 'winston'
import { Observable, ReplaySubject } from 'rxjs'
import { TransformStream } from './transform-stream'
import { InputStream } from './input-stream'
import { OutputStream } from './output-stream'
import { Subscription } from './subscription'
import * as shared from './shared'
import logger from './logger'

interface pipeResult extends Array<any> {
  0: string
  1: Observable<any>
  2: Subscription
  3: boolean
}

class MutatorIO {
  public transformers: MutatorIO.Transformers = {}
  public subscriptions: MutatorIO.Subscriptions = {}

  static LogLevels = {
    NONE: -1,
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    VERBOSE: 3,
    DEBUG: 4,
    SILLY: 5
  }

  static defaultConfig: MutatorIO.Config = {
    LOG_LEVEL: MutatorIO.LogLevels.INFO,
    COLORS: true
  }

  constructor(
    public pipes: Array<MutatorIO.Pipe>,
    public config: MutatorIO.Config = {}
  ) {
    this.config = { ...MutatorIO.defaultConfig, ...config }
    logger.level = this.config.LOG_LEVEL
    if (logger.level === MutatorIO.LogLevels.NONE) {
      logger.remove('mutator-io-logger')
    }
    if (!this.config.COLORS) {
      c.enabled = false
      logger.transports['mutator-io-logger'].colorize = false
    }
  }

  removeTransformer(pipeName: string, index: number): boolean {
    if (!this.transformers[pipeName][index]) {
      return false
    }
    this.transformers[pipeName].slice(index, 1)
    return true
  }

  transform(pipeName: string, transform: TransformStream<any>): Subscription {
    this.transformers[pipeName] = this.transformers[pipeName] || []
    const lastIndex = this.transformers[pipeName].push(transform) - 1

    const subscription = new Subscription(this, pipeName, lastIndex)
    transform.subscriptionId = subscription.id
    this.subscriptions[subscription.id] = subscription
    return subscription
  }

  private composeStream(
    pipe: MutatorIO.Pipe,
    transformer: TransformStream<any>
  ): pipeResult {
    const inStream = pipe.in.create()
    const outStream = pipe.out.create()

    const controlled = pipe.in.controlled && pipe.in.controlled()

    return [
      pipe.name,
      shared.wrapToObservable(inStream).flatMap(data => {
        return Observable.of(controlled ? data[0] : data)
          .do(msg => logger.debug(c.yellow('pre-transformation'), msg))
          .flatMap(msg => shared.wrapToObservable(transformer.call(this, msg)))
          .do(msg => logger.debug(c.yellow('post-transformation'), msg))
          .flatMap(msg =>
            shared
              .wrapToObservable(outStream(msg))
              .catch(err => {
                logger.error(err)
                return Observable.empty()
              })
              .map(out => {
                return controlled ? [out, data[1]] : out
              })
          )
      }),
      this.subscriptions[transformer.subscriptionId],
      controlled
    ]
  }

  private subscribeToStream(
    [pipeName, stream, subscription, controlled]: pipeResult
  ) {
    logger.info(
      `${c.rainbow('•••')} Listening on pipe ${pipeName} ${c.rainbow('•••')}`
    )
    subscription.stream = stream
    subscription.disposable = stream.subscribe(
      data => {
        if (controlled) {
          logger.info(data[0])
          data[1]()
        } else {
          logger.info(data)
        }
      },
      data => {
        if (controlled) {
          logger.error(data[0])
          data[1]()
        } else {
          logger.error(data)
        }
      },
      () =>
        logger.info(
          `${c.rainbow('•••')} ${pipeName} pipe closed ${c.rainbow('•••')}`
        )
    )
  }

  start(): void {
    const streams = this.pipes.reduce((acc, pipe): Array<pipeResult> => {
      let currentTransformers = this.transformers[pipe.name]

      if (!currentTransformers || !currentTransformers.length) {
        this.transform(pipe.name, msg => msg)
        currentTransformers = this.transformers[pipe.name]
      }

      const currentPipeResult = currentTransformers.map(transformer =>
        this.composeStream(pipe, transformer)
      )

      return acc.concat(currentPipeResult)
    }, [])

    streams.forEach(this.subscribeToStream)
  }
}

namespace MutatorIO {
  export interface Pipe {
    name: string
    in: InputStream<any>
    out: OutputStream<any>
  }

  export interface Transformers {
    [name: string]: Array<TransformStream<any>>
  }

  export interface Subscriptions {
    [id: string]: Subscription
  }

  export interface Config {
    COLORS?: boolean
    LOG_LEVEL?: Number
  }
}

export = MutatorIO
