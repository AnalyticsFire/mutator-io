[mutator-io](../README.md) > ["subscription"](../modules/_subscription_.md) > [Subscription](../classes/_subscription_.subscription.md)



# Class: Subscription

## Index

### Constructors

* [constructor](_subscription_.subscription.md#constructor)


### Properties

* [disposable](_subscription_.subscription.md#disposable)
* [id](_subscription_.subscription.md#id)
* [mutatorInstance](_subscription_.subscription.md#mutatorinstance)
* [pipeName](_subscription_.subscription.md#pipename)
* [stream](_subscription_.subscription.md#stream)
* [transformIndex](_subscription_.subscription.md#transformindex)


### Methods

* [unsubscribe](_subscription_.subscription.md#unsubscribe)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Subscription**(mutatorInstance: *[MutatorIO](_mutator_io_.mutatorio.md)*, pipeName: *`string`*, transformIndex: *`number`*): [Subscription](_subscription_.subscription.md)



*Defined in [subscription.ts:10](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L10)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| mutatorInstance | [MutatorIO](_mutator_io_.mutatorio.md)   |  - |
| pipeName | `string`   |  - |
| transformIndex | `number`   |  - |





**Returns:** [Subscription](_subscription_.subscription.md)

---


## Properties
<a id="disposable"></a>

###  disposable

**●  disposable**:  *`RxjsSubscription`* 

*Defined in [subscription.ts:10](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L10)*





___

<a id="id"></a>

###  id

**●  id**:  *`string`* 

*Defined in [subscription.ts:8](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L8)*





___

<a id="mutatorinstance"></a>

### «Private» mutatorInstance

**●  mutatorInstance**:  *[MutatorIO](_mutator_io_.mutatorio.md)* 

*Defined in [subscription.ts:13](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L13)*





___

<a id="pipename"></a>

### «Private» pipeName

**●  pipeName**:  *`string`* 

*Defined in [subscription.ts:14](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L14)*





___

<a id="stream"></a>

###  stream

**●  stream**:  *`Observable`.<`any`>* 

*Defined in [subscription.ts:9](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L9)*





___

<a id="transformindex"></a>

### «Private» transformIndex

**●  transformIndex**:  *`number`* 

*Defined in [subscription.ts:15](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L15)*





___


## Methods
<a id="unsubscribe"></a>

###  unsubscribe

► **unsubscribe**(): `void`




*Defined in [subscription.ts:20](https://github.com/AnalyticsFire/mutator-io/blob/master/src/subscription.ts#L20)*





**Returns:** `void`





___


