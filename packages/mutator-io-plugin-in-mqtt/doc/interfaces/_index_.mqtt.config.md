[mutator-io-plugin-in-mqtt](../README.md) > ["index"](../modules/_index_.md) > [Mqtt](../classes/_index_.mqtt.md) > [Config](../interfaces/_index_.mqtt.config.md)



# Interface: Config

## Hierarchy


 `IClientOptions`

**↳ Config**








## Properties
<a id="ca"></a>

### «Optional» ca

**●  ca**:  *`string`⎮`string`[]⎮`Buffer`⎮`Buffer`[]* 

*Inherited from ISecureClientOptions.ca*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:104*



Optionally override the trusted CA certificates in PEM format




___

<a id="cert"></a>

### «Optional» cert

**●  cert**:  *`string`⎮`string`[]⎮`Buffer`⎮`Buffer`[]* 

*Inherited from ISecureClientOptions.cert*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:100*



optional cert chains in PEM format




___

<a id="clean"></a>

### «Optional» clean

**●  clean**:  *`boolean`* 

*Inherited from IClientOptions.clean*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:34*



true, set to false to receive QoS 1 and 2 messages while offline




___

<a id="clientid"></a>

### «Optional» clientId

**●  clientId**:  *`string`* 

*Inherited from IClientOptions.clientId*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:22*



'mqttjs_' + Math.random().toString(16).substr(2, 8)




___

<a id="connecttimeout"></a>

### «Optional» connectTimeout

**●  connectTimeout**:  *`number`* 

*Inherited from IClientOptions.connectTimeout*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:42*



30 * 1000 milliseconds, time to wait before a CONNACK is received




___

<a id="host"></a>

### «Optional» host

**●  host**:  *`string`* 

*Inherited from IClientOptions.host*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:7*





___

<a id="hostname"></a>

### «Optional» hostname

**●  hostname**:  *`string`* 

*Inherited from IClientOptions.hostname*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:8*





___

<a id="incomingstore"></a>

### «Optional» incomingStore

**●  incomingStore**:  *`Store`* 

*Inherited from IClientOptions.incomingStore*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:54*



a Store for the incoming packets




___

<a id="keepalive"></a>

### «Optional» keepalive

**●  keepalive**:  *`number`* 

*Inherited from IClientOptions.keepalive*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:18*



10 seconds, set to 0 to disable




___

<a id="key"></a>

### «Optional» key

**●  key**:  *`string`⎮`string`[]⎮`Buffer`⎮`Buffer`[]⎮`Object`[]* 

*Inherited from ISecureClientOptions.key*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:96*



optional private keys in PEM format




___

<a id="outgoingstore"></a>

### «Optional» outgoingStore

**●  outgoingStore**:  *`Store`* 

*Inherited from IClientOptions.outgoingStore*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:58*



a Store for the outgoing packets




___

<a id="password"></a>

### «Optional» password

**●  password**:  *`string`* 

*Inherited from IClientOptions.password*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:50*



the password required by your broker, if any




___

<a id="path"></a>

### «Optional» path

**●  path**:  *`string`* 

*Inherited from IClientOptions.path*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:9*





___

<a id="port"></a>

### «Optional» port

**●  port**:  *`number`* 

*Inherited from IClientOptions.port*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:6*





___

<a id="protocol"></a>

### «Optional» protocol

**●  protocol**:  *"wss"⎮"ws"⎮"mqtt"⎮"mqtts"⎮"tcp"⎮"ssl"⎮"wx"⎮"wxs"* 

*Inherited from IClientOptions.protocol*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:10*





___

<a id="protocolid"></a>

### «Optional» protocolId

**●  protocolId**:  *`string`* 

*Inherited from IClientOptions.protocolId*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:26*



'MQTT'




___

<a id="protocolversion"></a>

### «Optional» protocolVersion

**●  protocolVersion**:  *`number`* 

*Inherited from IClientOptions.protocolVersion*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:30*



4




___

<a id="queueqoszero"></a>

### «Optional» queueQoSZero

**●  queueQoSZero**:  *`boolean`* 

*Inherited from IClientOptions.queueQoSZero*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:59*





___

<a id="reconnectperiod"></a>

### «Optional» reconnectPeriod

**●  reconnectPeriod**:  *`number`* 

*Inherited from IClientOptions.reconnectPeriod*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:38*



1000 milliseconds, interval between two reconnections




___

<a id="rejectunauthorized"></a>

### «Optional» rejectUnauthorized

**●  rejectUnauthorized**:  *`boolean`* 

*Inherited from ISecureClientOptions.rejectUnauthorized*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:105*





___

<a id="reschedulepings"></a>

### «Optional» reschedulePings

**●  reschedulePings**:  *`boolean`* 

*Inherited from IClientOptions.reschedulePings*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:60*





___

<a id="resubscribe"></a>

### «Optional» resubscribe

**●  resubscribe**:  *`boolean`* 

*Inherited from IClientOptions.resubscribe*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:68*



true, set to false to disable re-subscribe functionality




___

<a id="servers"></a>

### «Optional» servers

**●  servers**:  *`Array`.<`object`>* 

*Inherited from IClientOptions.servers*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:61*





___

<a id="topics"></a>

###  topics

**●  topics**:  *`string`[]* 

*Defined in [index.ts:74](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-in-mqtt/index.ts#L74)*





___

<a id="transformwsurl"></a>

### «Optional» transformWsUrl

**●  transformWsUrl**:  *`function`* 

*Inherited from IClientOptions.transformWsUrl*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:90*


#### Type declaration
►(url: *`string`*, options: *`IClientOptions`*, client: *`MqttClient`*): `string`



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

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:46*



the username required by your broker, if any




___

<a id="will"></a>

### «Optional» will

**●  will**:  *`object`* 

*Inherited from IClientOptions.will*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:72*



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

**●  wsOptions**:  *`object`* 

*Inherited from IClientOptions.wsOptions*

*Defined in node_modules/mqtt/types/lib/client-options.d.ts:12*


#### Type declaration


[x: `string`]: `any`






___


