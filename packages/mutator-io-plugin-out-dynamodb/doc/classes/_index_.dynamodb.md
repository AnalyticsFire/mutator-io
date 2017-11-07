[mutator-io-plugin-out-dynamodb](../README.md) > ["index"](../modules/_index_.md) > [DynamoDB](../classes/_index_.dynamodb.md)



# Class: DynamoDB

## Implements

* `OutputStream`.<[Message](../interfaces/_index_.dynamodb.message.md)>

## Index

### Enumerations

* [Operations](../enums/_index_.dynamodb.operations.md)


### Interfaces

* [Config](../interfaces/_index_.dynamodb.config.md)
* [IgnorableError](../interfaces/_index_.dynamodb.ignorableerror.md)
* [Message](../interfaces/_index_.dynamodb.message.md)
* [RetryDelay](../interfaces/_index_.dynamodb.retrydelay.md)


### Constructors

* [constructor](_index_.dynamodb.md#constructor)


### Properties

* [client](_index_.dynamodb.md#client)
* [config](_index_.dynamodb.md#config-1)


### Methods

* [create](_index_.dynamodb.md#create)


### Object literals

* [defaultConfig](_index_.dynamodb.md#defaultconfig)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new DynamoDB**(config?: *[Config](../interfaces/_index_.dynamodb.config.md)*): [DynamoDB](_index_.dynamodb.md)


*Defined in [index.ts:16](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-out-dynamodb/index.ts#L16)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| config | [Config](../interfaces/_index_.dynamodb.config.md)  |  {} |   - |





**Returns:** [DynamoDB](_index_.dynamodb.md)

---


## Properties
<a id="client"></a>

###  client

**●  client**:  *`DocumentClient`* 

*Defined in [index.ts:12](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-out-dynamodb/index.ts#L12)*





___

<a id="config-1"></a>

###  config

**●  config**:  *[Config](../interfaces/_index_.dynamodb.config.md)* 

*Defined in [index.ts:18](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-out-dynamodb/index.ts#L18)*





___


## Methods
<a id="create"></a>

###  create

► **create**(): `(Anonymous function)`



*Defined in [index.ts:23](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-out-dynamodb/index.ts#L23)*





**Returns:** `(Anonymous function)`





___


<a id="defaultconfig"></a>

## Object literal: defaultConfig


<a id="defaultconfig.ignore_errors"></a>

###  IGNORE_ERRORS

**●  IGNORE_ERRORS**:  *`undefined`[]*  =  []

*Defined in [index.ts:15](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-out-dynamodb/index.ts#L15)*





___


