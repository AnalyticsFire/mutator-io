import { MutatorIO } from './mutator-io'

export default class Subscription {
  constructor (public id: string, public mutatorInstance: MutatorIO) {}
  remove (): void {
    throw new Error('Not implemented')
  }
}
