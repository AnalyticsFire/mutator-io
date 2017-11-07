# DynamoDB output stream
[![NPM version](https://badge.fury.io/js/mutator-io-plugin-in-mqtt.svg)](https://badge.fury.io/js/mutator-io-plugin-in-mqtt)

DynamoDB output stream aims to cover as many operations possible via [aws sdk](https://github.com/aws/aws-sdk-js) DynamoDB module to be used with [mutator-io](https://github.com/AnalyticsFire/mutator-io).

## Installation
```
npm i mutator-io-plugin-out-dynamodb
```

Ideally this should leverage Rx.js to perform fail-safe operations like batchWriteItem. This means that we can hide the whole logic of retrying failed calls (e.g. consuming `UnprocessedItems` returned from the standard BatchWriteItem call untill all of them are written)

The configuration required is [exactly the same of the original sdk](https://github.com/aws/aws-sdk-js/blob/master/lib/dynamodb/document_client.d.ts).

There's an extra custom parameter called `IGNORE_ERROR_CODES` which is a list of error codes that we might want to ignore to avoid bloating the logs (e.g. `ConditionalCheckFailedException` might not be a "real" exception so we can ignore it).

The `create` method returns a function that accepts a custom `Message` type parameter.

```typescript
enum Operations {
  PUT = 'put',
  DELETE = 'delete'
  UPDATE = 'update'
}

export interface RetryDelay {
  (msg: any): Observable<number>
}

export interface Message {
  operation: Operations
  params: Object
  retry?: number
  retryDelay?: RetryDelay
}
```

As long as the transformation returns an object shaped this way, this output stream will perform one of the `Operations` specified in the DynamoDB instance and will return the same message we've sent in the output if it succeeds (or fire the stream's error callback)

### Transformation example:
```typescript
import * as DynamoDBOutputStream from 'mutator-io-plugin-out-dynamodb'

mutatorIOInstance.transform('myPipeName', (msg): DynamoDBOutputStream.Message => {
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

You can optionally specify a `retry` parameter, which will make the output stream retry the write operation `N` times in case of failure.
`retrDelay` optional parameter should be a function returning an observable (e.g. `(msg) => Rx.Observable.of(2000)`) - this will be called every time an error comes in, allowing the user to set dynamic delays between retries (e.g. based on something in the message, or perform more complex async operations to determine the delay to apply)

## [Typescript documentation](doc/README.md)
