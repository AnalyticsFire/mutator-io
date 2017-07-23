import * as outputStreams from './output-streams'
import * as inputStreams from './input-streams'
import * as transformStreams from './transform-streams'

export { InputStream } from './input-streams'
export { OutputStream } from './output-streams'
export { TransformStream } from './transform-streams'

export { MutatorIO, Pipe, Config } from './mutator-io'
export { MutatorIO as default } from './mutator-io'
export { Subscription } from './subscription'

export {
  inputStreams,
  transformStreams,
  outputStreams
}
