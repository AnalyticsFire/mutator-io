[mutator-io-plugin-in-mqtt](../README.md) > ["index"](../modules/_index_.md) > [Mqtt](../classes/_index_.mqtt.md)



# Class: Mqtt

## Implements

* `InputStream`.<[Message](../interfaces/_index_.mqtt.message.md)>

## Index

### Interfaces

* [Config](../interfaces/_index_.mqtt.config.md)
* [Message](../interfaces/_index_.mqtt.message.md)


### Constructors

* [constructor](_index_.mqtt.md#constructor)


### Properties

* [client](_index_.mqtt.md#client)
* [clientObs](_index_.mqtt.md#clientobs)
* [topics](_index_.mqtt.md#topics)


### Methods

* [create](_index_.mqtt.md#create)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Mqtt**(config: *[Config](../interfaces/_index_.mqtt.config.md)*): [Mqtt](_index_.mqtt.md)


*Defined in [index.ts:9](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-in-mqtt/index.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [Config](../interfaces/_index_.mqtt.config.md)   |  - |





**Returns:** [Mqtt](_index_.mqtt.md)

---


## Properties
<a id="client"></a>

###  client

**●  client**:  *`MqttClient`* 

*Defined in [index.ts:7](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-in-mqtt/index.ts#L7)*





___

<a id="clientobs"></a>

###  clientObs

**●  clientObs**:  *`Observable`.<`MqttClient`>* 

*Defined in [index.ts:8](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-in-mqtt/index.ts#L8)*





___

<a id="topics"></a>

###  topics

**●  topics**:  *`string`[]* 

*Defined in [index.ts:9](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-in-mqtt/index.ts#L9)*





___


## Methods
<a id="create"></a>

###  create

► **create**(): `Observable`.<`any`>



*Defined in [index.ts:38](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-in-mqtt/index.ts#L38)*





**Returns:** `Observable`.<`any`>





___


