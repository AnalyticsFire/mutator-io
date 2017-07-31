[mutator-io](../README.md) > ["mutator-io"](../modules/_mutator_io_.md) > [MutatorIO](../classes/_mutator_io_.mutatorio.md)



# Class: MutatorIO

## Index

### Interfaces

* [Config](../interfaces/_mutator_io_.mutatorio.config.md)
* [Pipe](../interfaces/_mutator_io_.mutatorio.pipe.md)
* [Subscriptions](../interfaces/_mutator_io_.mutatorio.subscriptions.md)
* [Transformers](../interfaces/_mutator_io_.mutatorio.transformers.md)


### Constructors

* [constructor](_mutator_io_.mutatorio.md#constructor)


### Properties

* [config](_mutator_io_.mutatorio.md#config-1)
* [pipes](_mutator_io_.mutatorio.md#pipes)
* [subscriptions](_mutator_io_.mutatorio.md#subscriptions-1)
* [transformers](_mutator_io_.mutatorio.md#transformers-1)


### Methods

* [composeStream](_mutator_io_.mutatorio.md#composestream)
* [removeTransformer](_mutator_io_.mutatorio.md#removetransformer)
* [start](_mutator_io_.mutatorio.md#start)
* [subscribeToStream](_mutator_io_.mutatorio.md#subscribetostream)
* [transform](_mutator_io_.mutatorio.md#transform)


### Object literals

* [defaultConfig](_mutator_io_.mutatorio.md#defaultconfig)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new MutatorIO**(pipes: *`Array`.<[Pipe](../interfaces/_mutator_io_.mutatorio.pipe.md)>*, config?: *[Config](../interfaces/_mutator_io_.mutatorio.config.md)*): [MutatorIO](_mutator_io_.mutatorio.md)



*Defined in [mutator-io.ts:23](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L23)*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| pipes | `Array`.<[Pipe](../interfaces/_mutator_io_.mutatorio.pipe.md)>  | - |   - |
| config | [Config](../interfaces/_mutator_io_.mutatorio.config.md)  |  {} |   - |





**Returns:** [MutatorIO](_mutator_io_.mutatorio.md)

---


## Properties
<a id="config-1"></a>

###  config

**●  config**:  *[Config](../interfaces/_mutator_io_.mutatorio.config.md)* 

*Defined in [mutator-io.ts:25](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L25)*





___

<a id="pipes"></a>

###  pipes

**●  pipes**:  *`Array`.<[Pipe](../interfaces/_mutator_io_.mutatorio.pipe.md)>* 

*Defined in [mutator-io.ts:25](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L25)*





___

<a id="subscriptions-1"></a>

###  subscriptions

**●  subscriptions**:  *[Subscriptions](../interfaces/_mutator_io_.mutatorio.subscriptions.md)* 

*Defined in [mutator-io.ts:18](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L18)*





___

<a id="transformers-1"></a>

###  transformers

**●  transformers**:  *[Transformers](../interfaces/_mutator_io_.mutatorio.transformers.md)* 

*Defined in [mutator-io.ts:17](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L17)*





___


## Methods
<a id="composestream"></a>

### «Private» composeStream

► **composeStream**(pipe: *[Pipe](../interfaces/_mutator_io_.mutatorio.pipe.md)*, transformer: *[TransformStream](../interfaces/_transform_streams_index_.transformstream.md)*): [pipeResult](../interfaces/_mutator_io_.piperesult.md)




*Defined in [mutator-io.ts:52](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L52)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pipe | [Pipe](../interfaces/_mutator_io_.mutatorio.pipe.md)   |  - |
| transformer | [TransformStream](../interfaces/_transform_streams_index_.transformstream.md)   |  - |





**Returns:** [pipeResult](../interfaces/_mutator_io_.piperesult.md)





___

<a id="removetransformer"></a>

###  removeTransformer

► **removeTransformer**(pipeName: *`string`*, index: *`number`*): `boolean`




*Defined in [mutator-io.ts:34](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L34)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pipeName | `string`   |  - |
| index | `number`   |  - |





**Returns:** `boolean`





___

<a id="start"></a>

###  start

► **start**(): `void`




*Defined in [mutator-io.ts:83](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L83)*





**Returns:** `void`





___

<a id="subscribetostream"></a>

### «Private» subscribeToStream

► **subscribeToStream**(__namedParameters: *[`string`,`Observable`,[Subscription](_subscription_.subscription.md)]*): `void`




*Defined in [mutator-io.ts:72](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L72)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| __namedParameters | [`string`,`Observable`,[Subscription](_subscription_.subscription.md)]   |  - |





**Returns:** `void`





___

<a id="transform"></a>

###  transform

► **transform**(pipeName: *`string`*, transform: *[TransformStream](../interfaces/_transform_streams_index_.transformstream.md)*): [Subscription](_subscription_.subscription.md)




*Defined in [mutator-io.ts:42](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L42)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| pipeName | `string`   |  - |
| transform | [TransformStream](../interfaces/_transform_streams_index_.transformstream.md)   |  - |





**Returns:** [Subscription](_subscription_.subscription.md)





___


<a id="defaultconfig"></a>

## Object literal: defaultConfig


<a id="defaultconfig.colors"></a>

###  COLORS

**●  COLORS**:  *`boolean`*  = true

*Defined in [mutator-io.ts:22](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L22)*





___
<a id="defaultconfig.log_level"></a>

###  LOG_LEVEL

**●  LOG_LEVEL**:  *`string`*  = "INFO"

*Defined in [mutator-io.ts:21](https://github.com/AnalyticsFire/mutator-io/blob/master/src/mutator-io.ts#L21)*





___


