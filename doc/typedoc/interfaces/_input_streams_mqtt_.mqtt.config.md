[mutator-io](../README.md) > ["input-streams/mqtt"](../modules/_input_streams_mqtt_.md) > [Mqtt](../classes/_input_streams_mqtt_.mqtt.md) > [Config](../interfaces/_input_streams_mqtt_.mqtt.config.md)



# Interface: Config

## Hierarchy


 `IClientOptions`

**↳ Config**








## Properties
<a id="ca"></a>

### «Optional» ca

**●  ca**:  *`string`⎮`string`[]⎮`Buffer`⎮`Buffer`[]* 

*Inherited from ISecureClientOptions.ca*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:100*



Optionally override the trusted CA certificates in PEM format




___

<a id="cert"></a>

### «Optional» cert

**●  cert**:  *`string`⎮`string`[]⎮`Buffer`⎮`Buffer`[]* 

*Inherited from ISecureClientOptions.cert*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:96*



optional cert chains in PEM format




___

<a id="clean"></a>

### «Optional» clean

**●  clean**:  *`boolean`* 

*Inherited from IClientOptions.clean*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:34*



true, set to false to receive QoS 1 and 2 messages while offline




___

<a id="clientid"></a>

### «Optional» clientId

**●  clientId**:  *`string`* 

*Inherited from IClientOptions.clientId*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:22*



'mqttjs_' + Math.random().toString(16).substr(2, 8)




___

<a id="connecttimeout"></a>

### «Optional» connectTimeout

**●  connectTimeout**:  *`number`* 

*Inherited from IClientOptions.connectTimeout*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:42*



30 * 1000 milliseconds, time to wait before a CONNACK is received




___

<a id="host"></a>

### «Optional» host

**●  host**:  *`string`* 

*Inherited from IClientOptions.host*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:7*





___

<a id="hostname"></a>

### «Optional» hostname

**●  hostname**:  *`string`* 

*Inherited from IClientOptions.hostname*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:8*





___

<a id="incomingstore"></a>

### «Optional» incomingStore

**●  incomingStore**:  *`Store`* 

*Inherited from IClientOptions.incomingStore*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:54*



a Store for the incoming packets




___

<a id="keepalive"></a>

### «Optional» keepalive

**●  keepalive**:  *`number`* 

*Inherited from IClientOptions.keepalive*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:18*



10 seconds, set to 0 to disable




___

<a id="key"></a>

### «Optional» key

**●  key**:  *`string`⎮`string`[]⎮`Buffer`⎮`Buffer`[]⎮`Object`[]* 

*Inherited from ISecureClientOptions.key*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:92*



optional private keys in PEM format




___

<a id="outgoingstore"></a>

### «Optional» outgoingStore

**●  outgoingStore**:  *`Store`* 

*Inherited from IClientOptions.outgoingStore*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:58*



a Store for the outgoing packets




___

<a id="password"></a>

### «Optional» password

**●  password**:  *`string`* 

*Inherited from IClientOptions.password*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:50*



the password required by your broker, if any




___

<a id="path"></a>

### «Optional» path

**●  path**:  *`string`* 

*Inherited from IClientOptions.path*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:9*





___

<a id="port"></a>

### «Optional» port

**●  port**:  *`number`* 

*Inherited from IClientOptions.port*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:6*





___

<a id="protocol"></a>

### «Optional» protocol

**●  protocol**:  *"wss"⎮"ws"⎮"mqtt"⎮"mqtts"⎮"tcp"⎮"ssl"* 

*Inherited from IClientOptions.protocol*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:10*





___

<a id="protocolid"></a>

### «Optional» protocolId

**●  protocolId**:  *`string`* 

*Inherited from IClientOptions.protocolId*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:26*



'MQTT'




___

<a id="protocolversion"></a>

### «Optional» protocolVersion

**●  protocolVersion**:  *`number`* 

*Inherited from IClientOptions.protocolVersion*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:30*



4




___

<a id="queueqoszero"></a>

### «Optional» queueQoSZero

**●  queueQoSZero**:  *`boolean`* 

*Inherited from IClientOptions.queueQoSZero*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:59*





___

<a id="reconnectperiod"></a>

### «Optional» reconnectPeriod

**●  reconnectPeriod**:  *`number`* 

*Inherited from IClientOptions.reconnectPeriod*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:38*



1000 milliseconds, interval between two reconnections




___

<a id="rejectunauthorized"></a>

### «Optional» rejectUnauthorized

**●  rejectUnauthorized**:  *`boolean`* 

*Inherited from ISecureClientOptions.rejectUnauthorized*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:101*





___

<a id="reschedulepings"></a>

### «Optional» reschedulePings

**●  reschedulePings**:  *`boolean`* 

*Inherited from IClientOptions.reschedulePings*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:60*





___

<a id="servers"></a>

### «Optional» servers

**●  servers**:  *`Array`.<object>* 

*Inherited from IClientOptions.servers*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:61*





___

<a id="topics"></a>

###  topics

**●  topics**:  *`string`[]* 

*Defined in [input-streams/mqtt.ts:77](https://github.com/AnalyticsFire/mutator-io/blob/master/src/input-streams/mqtt.ts#L77)*





___

<a id="transformwsurl"></a>

### «Optional» transformWsUrl

**●  transformWsUrl**:  *function* 

*Inherited from IClientOptions.transformWsUrl*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:86*


#### Type declaration
(url: *`string`*, options: *`IClientOptions`*, client: *`MqttClient`*): `string`


*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:86*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  - |
| options | `IClientOptions`   |  - |
| client | `MqttClient`   |  - |





**Returns:** `string`






___

<a id="username"></a>

### «Optional» username

**●  username**:  *`string`* 

*Inherited from IClientOptions.username*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:46*



the username required by your broker, if any




___

<a id="will"></a>

### «Optional» will

**●  will**:  *object* 

*Inherited from IClientOptions.will*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:68*



a message that will sent by the broker automatically when the client disconnect badly.

#### Type declaration


payload: `string`

the message to publish




qos: `QoS`

the QoS




retain: `boolean`

the retain flag




topic: `string`

the topic to publish







___

<a id="wsoptions"></a>

### «Optional» wsOptions

**●  wsOptions**:  *object* 

*Inherited from IClientOptions.wsOptions*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/mqtt/types/lib/client-options.d.ts:12*


#### Type declaration


[x: `string`]: `any`





___


