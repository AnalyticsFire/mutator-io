# DynamoDB output stream
DynamoDB output stream aims to cover as many operations possible via [aws sdk](https://github.com/aws/aws-sdk-js) DynamoDB module to be used with [mutator-io](https://github.com/AnalyticsFire/mutator-io).

Ideally this should leverage Rx.js to perform fail-safe operations like batchWriteItem. This means that we can hide the whole logic of retrying failed calls (e.g. consuming `UnprocessedItems` returned from the standard BatchWriteItem call untill all of them are written)

The configuration required is [exactly the same of the original sdk](https://github.com/aws/aws-sdk-js/blob/master/lib/dynamodb/document_client.d.ts).

The `create` method returns a function that accepts a custom `Message` type parameter.

```typescript
enum Operations {
  PUT = 'put',
  DELETE = 'delete'
  UPDATE = 'update'
}

interface Message {
  operation: Operations
  params: Object
}
```

As long as the transformation returns an object shaped this way, this output stream will perform one of the `Operations` specified in the DynamoDB instance and will return the same message we've sent in the output if it succeeds (or fire the stream's error callback)

### Transformation example:
```typescript
mutatorIOInstance.transform('myPipeName', (msg): outputStreams.DynamoDB.Message => {
  const params = {
    TableName : 'test_table',
    Item: {
      id: msg.payload,
      NumAttribute: 1,
      BoolAttribute: true,
      ListAttribute: [1, 'two', false],
      MapAttribute: { foo: 'bar'},
      NullAttribute: null
    }
  }

  return {
    operation: outputStreams.DynamoDB.Operations.PUT,
    params
  }
})
```
