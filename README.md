# Mutator I/O

[![Build Status](https://travis-ci.org/AnalyticsFire/mutator-io.svg?branch=master)](https://travis-ci.org/AnalyticsFire/mutator-io)
[![NPM version](https://badge.fury.io/js/mutator-io.svg)](https://badge.fury.io/js/mutator-io)
[![Standard JS](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![TypeScript](https://cdn.rawgit.com/ellerbrock/typescript-badges/6e8282b8/badges/version/typescript-v2.4.svg)](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-4.html)

Mutator I/O is a tiny library to handle data [transformations](doc/transform-streams/transform-streams.md). It uses [RxJS](https://github.com/Reactive-Extensions/RxJS) to compose streams of data from a source (inputStream) to a destination (outputStream)

## Installation

```bash
npm i mutator-io
```

## Pipes
The concept of a "pipe" in Mutator I/O is simply an [input stream](doc/input-streams/input-streams.md) piped into an [output stream](doc/output-streams/output-streams.md)

```typescript
interface Pipe {
  name: string
  in: InputStream
  out: OutputStream
}
```

![Input output](../master/doc/assets/input-output.png?raw=true)

```typescript
import {
  MutatorIO,
  inputStreams,
  outputStreams
} from 'mutator-io'

const myPipe = {
  name: 'myPipeName',
  in: new inputStreams.Mqtt({
    url: 'mqtt://localhost:1883',
    topics: ['mytopic']
  }),
  out: new outputStreams.DynamoDB(),
}

const mutator = new MutatorIO([myPipe])
mutator.start()
```

## Main library signature
```typescript
interface Config {
  COLORS?: boolean
  LOG_LEVEL?: 'NONE' | 'INFO' | 'DEBUG'
}

class MutatorIO {
  // Constructor receives an array of Pipes and an optional Config object
  constructor(pipes: Array<Pipe>, config?: Config)
  // Used internally by subscription to remove a trasnformer
  removeTransformer(pipeName: string, index: number): boolean
  // Main method used to add a transformation to an existing pipe
  transform(pipeName: string, transform: TransformStream): Subscription
  // Subscribes to the streams and start listening to inputStreams
  start(): void
}
```

## Default Input/Transform/Output streams
  - ### Input
    - [MQTT](doc/input-streams/mqtt.md)
  - ### Transform
    - [Pass-through](doc/transform-streams/pass-through.md)
  - ### Output
    - [DynamoDB](doc/output-streams/dynamodb.md)
    - [Pass-through](doc/output-streams/pass-through.md)

## Adding transformations
Once you create a pipe, you have the possiblity to append data transformations to manipulate / aggregate / mutate the incoming data as you please (before it gets to the outputStream in the pipe)

![Input transform output](../master/doc/assets/input-transform-output.png?raw=true)

```typescript
// Transform can be a simple function
// or a function returning an Observable or a Promise
mutator.transform('myPipeName', (msg) => msg + 'something')
mutator.transform('myPipeName', (msg) => Rx.Observable.from([msg + 'something']))
mutator.transform('myPipeName', (msg) => Promise.resolve(msg + 'something else delayed'))

// Transformers can implement Typescript interfaces provided by output Streams
// E.G. this transform operation transforms the incoming payload from myPipeName
// into a DynamoDB delete query, treating payload as the key of the item to delete
mutator.transform('myPipeName', (msg): outputStreams.DynamoDB.Message => {
  operation: outputStreams.DynamoDB.Operations.DELETE,
    params: {
      TableName: 'processor_test',
      Key: {
        id: msg.payload,
      }
  }
})
```

## Contributing

Use `npm link` inside your clone of this repo to create a sym link that you can reference with `npm link mutator-io` inside your "test" project. This way you can run `npm run build:watch` and keep working on the library while testing it on an example project (or just use tests)

`pre-commit` ensures that commits are linted and tests are green in order to perform a new commit.

### NPM Scripts

```javascript
"build"          // Builds the files using tsc
"build:watch"    // Builds the files using tsc with -w argument recompile on change
"doc"            // Generates the documentation leveraging Typescript via Typedoc
"lint"           // Lints and autofix problems using eslint with Typescript parser
"test"           // Launches mocha tests
"test:watch"     // Launches mocha tests with watch optin to retrigger on change
"test:debug"     // Launches iron-node with source maps support to debug tests
"publish-please" // Uses publish-please to release a new npm version
```

### TODO
  - ~~Add documentation on the existing pre-defined streams (Mqtt, passThrough, DynamoDB)~~
  - ~~Add documentation on how to construct an inputStream~~
  - ~~Add documentation on how to construct an outputStream~~
  - ~~Create further documentation leveraging typescript~~
  - ~~Add tests coverage~~
  - Add better error handling
