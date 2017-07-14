# Mutator I/O

Mutator I/O is a tiny library to handle data transformations. It uses [RxJS](https://github.com/Reactive-Extensions/RxJS) to compose streams of data from a source (inputStream) to a destination (outputStream)

## Pipes
The concept of a "pipe" in Mutator I/O is simply an inputStream piped into an outputStream

<!-- Place image -->

```javascript
const myPipe = {
  name: 'myPipeName',
  in: new inputStreams.Mqtt({
    url: 'mqtt://localhost:1883',
    topics: ['mytopic']
  }),
  out: new outputStreams.DynamoDB(),
}

const mutator = new MutatorIO([myPipe])
```

## Adding transformations
Once you create a pipe, you have the possiblity to append data transformations to manipulate / aggregate / mutate the incoming data as you please (before it gets to the outputStream in the pipe)

<!-- place image -->

```javascript

// Transform can be a simple function
// or a function returning an Observable or a Promise
mutator.transform('myPipeName', (msg) => msg + 'something')
mutator.transform('myPipeName', (msg) => Rx.Observable.from([msg + 'something']))
mutator.transform('myPipeName', (msg) => Promise.resolve(msg + 'something else delayed'))

// Transformers can implement Typescript interfaces provided by output Streams
// E.G. this transform operation transforms the incoming payload from myPipeName
// into a DynamoDB delete query, treating payload as the key of the item to delete
mutator.transform('myPipeName', (msg): outputStreams.Dynamo.DynamoDBMessage => {
  operation: outputStreams.DynamoDB.Operations.DELETE,
    params: {
      TableName: 'processor_test',
      Key: {
        id: msg.payload,
      }
  }
})
```

### TODO
  - Add documentation on the existing pre-defined streams (Mqtt, passThrough, DynamoDB)
  - Add documentation on how to construct an inputStream
  - Add documentation on how to construct an outputStream
  - Create further documentation leveraging typescript
  - Add better error handling
  - Add tests coverage
