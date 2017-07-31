[mutator-io](../README.md) > ["input-streams/mqtt"](../modules/_input_streams_mqtt_.md) > [Mqtt](../classes/_input_streams_mqtt_.mqtt.md)



# Class: Mqtt

## Implements

* [InputStream](../interfaces/_input_streams_index_.inputstream.md)

## Index

### Interfaces

* [Config](../interfaces/_input_streams_mqtt_.mqtt.config.md)
* [Message](../interfaces/_input_streams_mqtt_.mqtt.message.md)


### Constructors

* [constructor](_input_streams_mqtt_.mqtt.md#constructor)


### Properties

* [client](_input_streams_mqtt_.mqtt.md#client)
* [clientObs](_input_streams_mqtt_.mqtt.md#clientobs)
* [topics](_input_streams_mqtt_.mqtt.md#topics)


### Methods

* [create](_input_streams_mqtt_.mqtt.md#create)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new Mqtt**(config: *[Config](../interfaces/_input_streams_mqtt_.mqtt.config.md)*): [Mqtt](_input_streams_mqtt_.mqtt.md)



*Defined in [input-streams/mqtt.ts:9](https://github.com/AnalyticsFire/mutator-io/blob/master/src/input-streams/mqtt.ts#L9)*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| config | [Config](../interfaces/_input_streams_mqtt_.mqtt.config.md)   |  - |





**Returns:** [Mqtt](_input_streams_mqtt_.mqtt.md)

---


## Properties
<a id="client"></a>

###  client

**●  client**:  *`MqttClient`* 

*Defined in [input-streams/mqtt.ts:7](https://github.com/AnalyticsFire/mutator-io/blob/master/src/input-streams/mqtt.ts#L7)*





___

<a id="clientobs"></a>

###  clientObs

**●  clientObs**:  *`Observable`.<`MqttClient`>* 

*Defined in [input-streams/mqtt.ts:8](https://github.com/AnalyticsFire/mutator-io/blob/master/src/input-streams/mqtt.ts#L8)*





___

<a id="topics"></a>

###  topics

**●  topics**:  *`string`[]* 

*Defined in [input-streams/mqtt.ts:9](https://github.com/AnalyticsFire/mutator-io/blob/master/src/input-streams/mqtt.ts#L9)*





___


## Methods
<a id="create"></a>

###  create

► **create**(): `Observable`.<[Message](../interfaces/_input_streams_mqtt_.mqtt.message.md)>




*Implementation of [InputStream](../interfaces/_input_streams_index_.inputstream.md).[create](../interfaces/_input_streams_index_.inputstream.md#create)*

*Defined in [input-streams/mqtt.ts:38](https://github.com/AnalyticsFire/mutator-io/blob/master/src/input-streams/mqtt.ts#L38)*





**Returns:** `Observable`.<[Message](../interfaces/_input_streams_mqtt_.mqtt.message.md)>





___


