[mutator-io](../README.md) > ["output-streams/dynamodb"](../modules/_output_streams_dynamodb_.md) > [DynamoDB](../classes/_output_streams_dynamodb_.dynamodb.md) > [Config](../interfaces/_output_streams_dynamodb_.dynamodb.config.md)



# Interface: Config

## Hierarchy


 `DocumentClientOptions`




 `ServiceConfigurationOptions``ClientApiVersions`

**↳ Config**








## Properties
<a id="convertemptyvalues"></a>

### «Optional» convertEmptyValues

**●  convertEmptyValues**:  *`boolean`* 

*Inherited from ConverterOptions.convertEmptyValues*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/aws-sdk/lib/dynamodb/document_client.d.ts:65*



An optional flag indicating that the document client should cast empty strings, buffers, and sets to NULL shapes




___

<a id="params"></a>

### «Optional» params

**●  params**:  *object* 

*Inherited from DocumentClientOptions.params*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/aws-sdk/lib/dynamodb/document_client.d.ts:72*



An optional map of parameters to bind to every request sent by this service object.

#### Type declaration


[key: `string`]: `any`





___

<a id="service"></a>

### «Optional» service

**●  service**:  *`DynamoDB`* 

*Inherited from DocumentClientOptions.service*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/node_modules/aws-sdk/lib/dynamodb/document_client.d.ts:76*



An optional pre-configured instance of the AWS.DynamoDB service object to use for requests. The object may bound parameters used by the document client.




___


