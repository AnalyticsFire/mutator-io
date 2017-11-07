# Input streams
An "input stream" in mutator-io is a class that can create Observables from a specific source of data like Mqtt, Redis, Kafka or virtually anything.

## Interface
```typescript
interface InputStream<T> {
  create(): Observable<T> | Promise<T> | T
}
```

Nothing too restrictive. The only requirement is a `create` method that should return the same type provided during the definition of the class (generic `T`).

The generic type `T` you see here is simply an optional format you may want to specify to provide a Type for the message you want to produce, if you don't want to specify it, just use `any` e.g.
```
class MyInputStream extends InputStream<any>
```

Input streams will often have their configuration passed in the constructor (via `new ` keyword) and the creation of the Observable should only happen when we mutator-io calls `create` internally.

> This gives more flexibility as we can use a shared instance between multiple pipes, to optimize memory and bandwith usage
