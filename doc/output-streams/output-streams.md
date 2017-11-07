# Output streams
An "output stream" in mutator-io is a class that exposes a function to pass values to. This function can return a Promise, an Observable or a simple value that should represent the "write" operation result to the output medium.

## Interface
```typescript
interface OutputStreamCreateMethod<T> {
  (msg: T, scheduler?: IScheduler): any
}

interface OutputStream<T> {
  create(): OutputStreamCreateMethod<T>
}
```

The generic type `T` visible in the definition, is meant to be the type of message we expect as an input for the function returned by calling `create()`.

Very similar to an input stream, this interface specifies that create should return a method instead than a straight Observable. This allows mutator-io to pipe data into this output stream and wire the resulting Observable to the main stream (composed by an input stream, a transform stream and an output stream).

Output streams will also have their configuration passed in the constructor (via `new ` keyword) and the creation of the Observable should only happen when we mutator-io calls `create` internally and passes a value to the function returned.

> This ensures that we can use the same output stream instance for multiple pipes (e.g. share a DB connection)
