# Pass-through transform stream
This simple transform stream shows the simplest way we can create a transform stream, by piping the input to the output and relying on mutator-io wrapping capabilities to wrap the method into the main stream (composed by an input stream, a transform stream and an output stream)

```typescript
const PassThrough: TransformStream = (message) => message
```
