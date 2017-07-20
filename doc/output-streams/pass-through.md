# Pass-through output stream
This simple output stream shows the simplest way we can create an output stream, by piping the input to the output and relying on mutator-io wrapping capabilities to wrap the method into the main stream (composed by an input stream, a transform stream and an output stream)

```typescript
class PassThrough implements OutputStream {
  create () {
    return (message) => message
  }
}
```
