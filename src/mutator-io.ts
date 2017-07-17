import * as c from 'colors/safe'
import { Observable, ReplaySubject } from 'rxjs'
import { TransformStream } from './transform-streams'
import { InputStream } from './input-streams'
import { OutputStream } from './output-streams'
import * as shared from './shared'
import Subscription from './subscription'
import logger from './logger'

export interface Pipe {
  name: string,
  in: InputStream,
  out: OutputStream
}

export interface Transformers {
  [name: string]: Array<TransformStream>
}

export interface Subscriptions {
  [id: string]: Subscription
}

export type LogLevel = 'NONE' | 'DEBUG' | 'INFO'

export interface Config {
  LOG_LEVEL?: LogLevel
}

export class MutatorIO {
  transformers: Transformers = {}
  subscriptions: Subscriptions = {}

  constructor (public pipes: Array<Pipe>, public config: Config = {}) {
    logger.level = config.LOG_LEVEL.toLowerCase() || 'info'
  }

  removeTransformer (pipeName: string, index: number): boolean {
    if (!this.transformers[pipeName][index]) {
      return false
    }
    this.transformers[pipeName].slice(index, 1)
    return true
  }

  transform (pipeName: string, transform: TransformStream): Subscription {
    this.transformers[pipeName] = this.transformers[pipeName] || []
    const lastIndex = this.transformers[pipeName].push(transform) - 1

    const subscription = new Subscription(this, pipeName, lastIndex)
    transform.subscriptionId = subscription.id
    this.subscriptions[subscription.id] = subscription
    return subscription
  }

  start (): void {
    interface pipeResult extends Array<Object> {
      0: string,
      1: Observable<Object>
    }

    const streams = Object.keys(this.transformers)
      .reduce((acc, pipeName): Array<pipeResult> => {
        const currentPipe = this.pipes.find((pipe) => pipe.name === pipeName)

        const currentPipeResult = this.transformers[pipeName]
          .map((transformer): pipeResult => {
            const inStream = currentPipe.in.create()
            const outStream = currentPipe.out.create()

            return [
              pipeName,
              inStream
                .do((msg) => logger.debug(c.yellow('pre-transformation'), msg))
                .flatMap((msg) => shared.wrapToObservable(transformer.call(this, msg)))
                .do((msg) => logger.debug(c.yellow('post-transformation'), msg))
                .flatMap((msg) => shared.wrapToObservable(outStream(msg))
                  .catch((err) => {
                    logger.error(err)
                    return inStream
                  })
                ),
              this.subscriptions[transformer.subscriptionId]
            ]
          })

        return acc.concat(currentPipeResult)
      }, [])

    streams.map(([pipeName, stream, subscription]) => {
      logger.info(`${c.rainbow('•••')} Listening on pipe ${pipeName} ${c.rainbow('•••')}`)
      subscription.disposable = stream
        .subscribe(
          (msg) => logger.info(msg),
          (err) => logger.error(err),
          () => logger.info(`${c.rainbow('•••')} ${pipeName} pipe closed ${c.rainbow('•••')}`)
        )
    })
  }
}
