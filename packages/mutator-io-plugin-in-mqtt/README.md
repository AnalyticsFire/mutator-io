# MQTT input stream
[![NPM version](https://badge.fury.io/js/mutator-io.svg)](https://badge.fury.io/js/mutator-io)

MQTT input stream provides an easy wrapper around [MQTT.js](https://github.com/mqttjs/MQTT.js) for [mutator-io](https://github.com/AnalyticsFire/mutator-io).

## Installation
```
npm i mutator-io-plugin-in-mqtt
```

The configuration required is exactly the same, with the except of a new keyword called `topics` that will indicate which topics this instance should subscribe to.

```typescript
import { IClientOptions } from 'mqtt/types'

interface Config extends IClientOptions {
  topics: string[]
}
```

## TLS support
This kind of security is supported just like it is in MQTT.js (though there aren't many examples around)

```typescript
const myInputStream = new inputStreams.Mqtt({
  protocol: 'mqtts',
  host: 'my-endpoint.iot.eu-central-1.amazonaws.com',
  port: 8883,
  key: fs.readFileSync('./certs/mqtt.key'),
  cert: fs.readFileSync('./certs/mqtt.pem'),
  ca: fs.readFileSync('./certs/mqtt_ca.pem'),
  requestCert: true,
  rejectUnauthorized: true,
  topics: ['something/+/+/+/status/+/+/+']
})
```
## [Typescript documentation](doc/README.md)
