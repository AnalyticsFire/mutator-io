# Input streams
An "input stream" in mutator-io is a class that can create Observables from a specific source of data like Mqtt, Redis, Kafka or virtually anything.

## Interface
```typescript
interface InputStream {
  create(): Observable<Object>
}
```

Nothing too restrictive. The only requirement is a `create` method that should return an observable.

Input streams will often have their configuration passed in the constructor (via `new ` keyword) and the creation of the Observable should only happen when we mutator-io calls `create` internally.

> This should ensure that we can use the same input stream instance for multiple pipes
