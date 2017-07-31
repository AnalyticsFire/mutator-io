[mutator-io](../README.md) > ["output-streams/dynamodb"](../modules/_output_streams_dynamodb_.md) > [DynamoDB](../classes/_output_streams_dynamodb_.dynamodb.md)



# Class: DynamoDB

## Implements

* [OutputStream](../interfaces/_output_streams_index_.outputstream.md)

## Index

### Enumerations

* [Operations](../enums/_output_streams_dynamodb_.dynamodb.operations.md)


### Interfaces

* [Config](../interfaces/_output_streams_dynamodb_.dynamodb.config.md)
* [Message](../interfaces/_output_streams_dynamodb_.dynamodb.message.md)


### Constructors

* [constructor](_output_streams_dynamodb_.dynamodb.md#constructor)


### Properties

* [client](_output_streams_dynamodb_.dynamodb.md#client)


### Methods

* [create](_output_streams_dynamodb_.dynamodb.md#create)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new DynamoDB**(config?: *[Config](../interfaces/_output_streams_dynamodb_.dynamodb.config.md)*): [DynamoDB](_output_streams_dynamodb_.dynamodb.md)



*Defined in [output-streams/dynamodb.ts:6](https://github.com/AnalyticsFire/mutator-io/blob/master/src/output-streams/dynamodb.ts#L6)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| config | [Config](../interfaces/_output_streams_dynamodb_.dynamodb.config.md)  |  {} |   - |





**Returns:** [DynamoDB](_output_streams_dynamodb_.dynamodb.md)

---


## Properties
<a id="client"></a>

###  client

**●  client**:  *`DocumentClient`* 

*Defined in [output-streams/dynamodb.ts:6](https://github.com/AnalyticsFire/mutator-io/blob/master/src/output-streams/dynamodb.ts#L6)*





___


## Methods
<a id="create"></a>

###  create

► **create**(): `(Anonymous function)`




*Implementation of [OutputStream](../interfaces/_output_streams_index_.outputstream.md).[create](../interfaces/_output_streams_index_.outputstream.md#create)*

*Defined in [output-streams/dynamodb.ts:12](https://github.com/AnalyticsFire/mutator-io/blob/master/src/output-streams/dynamodb.ts#L12)*





**Returns:** `(Anonymous function)`





___


