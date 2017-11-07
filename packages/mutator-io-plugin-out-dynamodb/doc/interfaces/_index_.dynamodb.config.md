[mutator-io-plugin-out-dynamodb](../README.md) > ["index"](../modules/_index_.md) > [DynamoDB](../classes/_index_.dynamodb.md) > [Config](../interfaces/_index_.dynamodb.config.md)



# Interface: Config

## Hierarchy


 `DocumentClientOptions`




 `ServiceConfigurationOptions``ClientApiVersions`

**↳ Config**








## Properties
<a id="ignore_error_codes"></a>

### «Optional» IGNORE_ERROR_CODES

**●  IGNORE_ERROR_CODES**:  *`Array`.<`String`>* 

*Defined in [index.ts:112](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io-plugin-out-dynamodb/index.ts#L112)*





___

<a id="convertemptyvalues"></a>

### «Optional» convertEmptyValues

**●  convertEmptyValues**:  *`boolean`* 

*Inherited from ConverterOptions.convertEmptyValues*

*Defined in node_modules/aws-sdk/lib/dynamodb/document_client.d.ts:65*



An optional flag indicating that the document client should cast empty strings, buffers, and sets to NULL shapes




___

<a id="params"></a>

### «Optional» params

**●  params**:  *`object`* 

*Inherited from DocumentClientOptions.params*

*Defined in node_modules/aws-sdk/lib/dynamodb/document_client.d.ts:79*



An optional map of parameters to bind to every request sent by this service object.

#### Type declaration


[key: `string`]: `any`






___

<a id="service"></a>

### «Optional» service

**●  service**:  *`DynamoDB`* 

*Inherited from DocumentClientOptions.service*

*Defined in node_modules/aws-sdk/lib/dynamodb/document_client.d.ts:83*



An optional pre-configured instance of the AWS.DynamoDB service object to use for requests. The object may bound parameters used by the document client.




___

<a id="wrapnumbers"></a>

### «Optional» wrapNumbers

**●  wrapNumbers**:  *`boolean`* 

*Inherited from ConverterOptions.wrapNumbers*

*Defined in node_modules/aws-sdk/lib/dynamodb/document_client.d.ts:72*



Whether to return numbers as a NumberValue object instead of converting them to native JavaScript numbers. This allows for the safe round-trip transport of numbers of arbitrary size.




___


