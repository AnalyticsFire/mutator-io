[mutator-io-plugin-in-mqtt](../README.md) > ["index"](../modules/_index_.md) > [Mqtt](../classes/_index_.mqtt.md)



# Class: Mqtt

## Implements

* `any`

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


*Defined in index.ts:9*



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

*Defined in index.ts:7*





___

<a id="clientobs"></a>

###  clientObs

**●  clientObs**:  *`Observable`.<`MqttClient`>* 

*Defined in index.ts:8*





___

<a id="topics"></a>

###  topics

**●  topics**:  *`string`[]* 

*Defined in index.ts:9*





___


## Methods
<a id="create"></a>

###  create

► **create**(): `Observable`.<`any`>



*Defined in index.ts:38*





**Returns:** `Observable`.<`any`>





___


