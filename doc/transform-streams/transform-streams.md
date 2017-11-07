# Transform streams
A "transform stream" in mutator-io is a simple function that can mutate an incoming value and return the new one (or a Promise / Observable if the operation is asynchronous)

## Interface
```typescript
interface TransformStream<T> {
  (message: any): Observable<T> | Promise<T> | T
  subscriptionId?: string
}
```

This generic interface accepts a message and can return any type of value that will be handled by mutator-IO.

The generic type `T` indicates the type of value that we want to return. This allows to have a further layer of checking when writing trasformations for a given outputStream, for example:
```typescript
const myTransform = (message) => {
  // ... This will have to return an observable,
  // promise or direct value with DynamoDB.Message type
} as TransformStream<DynamoDB.Message>
```

Subscription ID is only needed for internal use (and **shouldn't be implemented**) to create a bound between the transformation and the subscription returned by the `transform` method

### Examples
```typescript
mutator.transform('myPipeName', (msg) => msg + 'something')
mutator.transform('myPipeName', (msg) => Promise.resolve(msg + 'something more'))
mutator.transform('myPipeName', (msg) => Rx.Observable.from([
  msg + 'something else delayed'
]).delay(200))
```
