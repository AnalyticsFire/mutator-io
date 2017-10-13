[mutator-io](../README.md) > ["mutator-io"](../modules/_mutator_io_.md) > [pipeResult](../interfaces/_mutator_io_.piperesult.md)



# Interface: pipeResult

## Hierarchy


 `Array`.<`Object`>

**↳ pipeResult**







## Indexable

\[n: `number`\]:&nbsp;`Object`

## Properties
<a id="0"></a>

###  0

**●  0**:  *`string`* 

*Defined in [mutator-io.ts:11](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io/src/mutator-io.ts#L11)*





___

<a id="1"></a>

###  1

**●  1**:  *`Observable`.<`Object`>* 

*Defined in [mutator-io.ts:12](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io/src/mutator-io.ts#L12)*





___

<a id="2"></a>

###  2

**●  2**:  *[Subscription](../classes/_subscription_.subscription.md)* 

*Defined in [mutator-io.ts:13](https://github.com/AnalyticsFire/mutator-io/blob/master/packages/mutator-io/src/mutator-io.ts#L13)*





___

<a id="array"></a>

###  Array

**●  Array**:  *`ArrayConstructor`* 

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1257*





___

<a id="length"></a>

###  length

**●  length**:  *`number`* 

*Inherited from Array.length*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1100*



Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.




___


## Methods
<a id="___iterator"></a>

###  __@iterator

► **__@iterator**(): `IterableIterator`.<`Object`>



*Inherited from Array.[Symbol.iterator]*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4780*



Iterator




**Returns:** `IterableIterator`.<`Object`>





___

<a id="___unscopables"></a>

###  __@unscopables

► **__@unscopables**(): `object`



*Inherited from Array.[Symbol.unscopables]*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:5653*



Returns an object whose properties have the value 'true' when they will be absent when used in a 'with' statement.




**Returns:** `object`





___

<a id="concat"></a>

###  concat

► **concat**(...items: *`Object`[][]*): `Object`[]

► **concat**(...items: *(`T`[]⎮`T`)[]*): `Object`[]



*Inherited from Array.concat*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1122*



Combines two or more arrays.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Object`[][]   |  Additional items to add to the end of array1. |





**Returns:** `Object`[]



*Inherited from Array.concat*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1127*



Combines two or more arrays.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | (`T`[]⎮`T`)[]   |  Additional items to add to the end of array1. |





**Returns:** `Object`[]





___

<a id="copywithin"></a>

###  copyWithin

► **copyWithin**(target: *`number`*, start: *`number`*, end?: *`number`*): `this`



*Inherited from Array.copyWithin*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4133*



Returns the this object after copying a section of the array identified by start and end to the same array starting at position target


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| target | `number`   |  If target is negative, it is treated as length+target where length is thelength of the array. |
| start | `number`   |  If start is negative, it is treated as length+start. If end is negative, itis treated as length+end. |
| end | `number`   |  If not specified, length of the this object is used as its default value. |





**Returns:** `this`





___

<a id="entries"></a>

###  entries

► **entries**(): `IterableIterator`.<[`number`,`Object`]>



*Inherited from Array.entries*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4785*



Returns an iterable of key, value pairs for every entry in the array




**Returns:** `IterableIterator`.<[`number`,`Object`]>





___

<a id="every"></a>

###  every

► **every**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`



*Inherited from Array.every*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1187*



Determines whether all the members of an array satisfy the specified test.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `boolean`





___

<a id="fill"></a>

###  fill

► **fill**(value: *`Object`*, start?: *`number`*, end?: *`number`*): `this`



*Inherited from Array.fill*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4122*



Returns the this object after filling the section identified by start and end with value


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| value | `Object`   |  value to fill array section with |
| start | `number`   |  index to start filling the array at. If start is negative, it is treated aslength+start where length is the length of the array. |
| end | `number`   |  index to stop filling the array at. If end is negative, it is treated aslength+end. |





**Returns:** `this`





___

<a id="filter"></a>

###  filter

► **filter**S(callbackfn: *`function`*, thisArg?: *`any`*): `S`[]

► **filter**(callbackfn: *`function`*, thisArg?: *`any`*): `Object`[]



*Inherited from Array.filter*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1211*



Returns the elements of an array that meet the condition specified in a callback function.


**Type parameters:**

#### S :  `Object`
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `S`[]



*Inherited from Array.filter*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1217*



Returns the elements of an array that meet the condition specified in a callback function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `Object`[]





___

<a id="find"></a>

###  find

► **find**(predicate: *`function`*): `Object`⎮`undefined`

► **find**(predicate: *`function`*, thisArg: *`undefined`*): `Object`⎮`undefined`

► **find**Z(predicate: *`function`*, thisArg: *`Z`*): `Object`⎮`undefined`



*Inherited from Array.find*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4097*



Returns the value of the first element in the array where predicate is true, and undefined otherwise.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  find calls predicate once for each element of the array, in ascendingorder, until it finds one where predicate returns true. If such an element is found, findimmediately returns that element value. Otherwise, find returns undefined. |





**Returns:** `Object`⎮`undefined`



*Inherited from Array.find*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4098*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  - |
| thisArg | `undefined`   |  - |





**Returns:** `Object`⎮`undefined`



*Inherited from Array.find*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4099*



**Type parameters:**

#### Z 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  - |
| thisArg | `Z`   |  - |





**Returns:** `Object`⎮`undefined`





___

<a id="findindex"></a>

###  findIndex

► **findIndex**(predicate: *`function`*): `number`

► **findIndex**(predicate: *`function`*, thisArg: *`undefined`*): `number`

► **findIndex**Z(predicate: *`function`*, thisArg: *`Z`*): `number`



*Inherited from Array.findIndex*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4110*



Returns the index of the first element in the array where predicate is true, and -1 otherwise.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  find calls predicate once for each element of the array, in ascendingorder, until it finds one where predicate returns true. If such an element is found,findIndex immediately returns that element index. Otherwise, findIndex returns -1. |





**Returns:** `number`



*Inherited from Array.findIndex*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4111*



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  - |
| thisArg | `undefined`   |  - |





**Returns:** `number`



*Inherited from Array.findIndex*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4112*



**Type parameters:**

#### Z 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| predicate | `function`   |  - |
| thisArg | `Z`   |  - |





**Returns:** `number`





___

<a id="foreach"></a>

###  forEach

► **forEach**(callbackfn: *`function`*, thisArg?: *`any`*): `void`



*Inherited from Array.forEach*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1199*



Performs the specified action for each element in an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `void`





___

<a id="indexof"></a>

###  indexOf

► **indexOf**(searchElement: *`Object`*, fromIndex?: *`number`*): `number`



*Inherited from Array.indexOf*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1175*



Returns the index of the first occurrence of a value in an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchElement | `Object`   |  The value to locate in the array. |
| fromIndex | `number`   |  The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |





**Returns:** `number`





___

<a id="join"></a>

###  join

► **join**(separator?: *`string`*): `string`



*Inherited from Array.join*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1132*



Adds all the elements of an array separated by the specified separator string.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| separator | `string`   |  A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |





**Returns:** `string`





___

<a id="keys"></a>

###  keys

► **keys**(): `IterableIterator`.<`number`>



*Inherited from Array.keys*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4790*



Returns an iterable of keys in the array




**Returns:** `IterableIterator`.<`number`>





___

<a id="lastindexof"></a>

###  lastIndexOf

► **lastIndexOf**(searchElement: *`Object`*, fromIndex?: *`number`*): `number`



*Inherited from Array.lastIndexOf*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1181*



Returns the index of the last occurrence of a specified value in an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| searchElement | `Object`   |  The value to locate in the array. |
| fromIndex | `number`   |  The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |





**Returns:** `number`





___

<a id="map"></a>

###  map

► **map**U(callbackfn: *`function`*, thisArg?: *`any`*): `U`[]



*Inherited from Array.map*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1205*



Calls a defined callback function on each element of an array, and returns an array that contains the results.


**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `U`[]





___

<a id="pop"></a>

###  pop

► **pop**(): `Object`⎮`undefined`



*Inherited from Array.pop*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1117*



Removes the last element from an array and returns it.




**Returns:** `Object`⎮`undefined`





___

<a id="push"></a>

###  push

► **push**(...items: *`Object`[]*): `number`



*Inherited from Array.push*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1113*



Appends new elements to an array, and returns the new length of the array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Object`[]   |  New elements of the Array. |





**Returns:** `number`





___

<a id="reduce"></a>

###  reduce

► **reduce**(callbackfn: *`function`*, initialValue?: *`Object`*): `Object`

► **reduce**U(callbackfn: *`function`*, initialValue: *`U`*): `U`



*Inherited from Array.reduce*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1223*



Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | `Object`   |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |





**Returns:** `Object`



*Inherited from Array.reduce*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1229*



Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| initialValue | `U`   |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |





**Returns:** `U`





___

<a id="reduceright"></a>

###  reduceRight

► **reduceRight**(callbackfn: *`function`*, initialValue?: *`Object`*): `Object`

► **reduceRight**U(callbackfn: *`function`*, initialValue: *`U`*): `U`



*Inherited from Array.reduceRight*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1235*



Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | `Object`   |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |





**Returns:** `Object`



*Inherited from Array.reduceRight*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1241*



Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.


**Type parameters:**

#### U 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| initialValue | `U`   |  If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |





**Returns:** `U`





___

<a id="reverse"></a>

###  reverse

► **reverse**(): `Object`[]



*Inherited from Array.reverse*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1136*



Reverses the elements in an Array.




**Returns:** `Object`[]





___

<a id="shift"></a>

###  shift

► **shift**(): `Object`⎮`undefined`



*Inherited from Array.shift*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1140*



Removes the first element from an array and returns it.




**Returns:** `Object`⎮`undefined`





___

<a id="slice"></a>

###  slice

► **slice**(start?: *`number`*, end?: *`number`*): `Object`[]



*Inherited from Array.slice*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1146*



Returns a section of an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The beginning of the specified portion of the array. |
| end | `number`   |  The end of the specified portion of the array. |





**Returns:** `Object`[]





___

<a id="some"></a>

###  some

► **some**(callbackfn: *`function`*, thisArg?: *`any`*): `boolean`



*Inherited from Array.some*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1193*



Determines whether the specified callback function returns true for any element of an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callbackfn | `function`   |  A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array. |
| thisArg | `any`   |  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |





**Returns:** `boolean`





___

<a id="sort"></a>

###  sort

► **sort**(compareFn?: *`function`*): `this`



*Inherited from Array.sort*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1151*



Sorts an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| compareFn | `function`   |  The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order. |





**Returns:** `this`





___

<a id="splice"></a>

###  splice

► **splice**(start: *`number`*, deleteCount?: *`number`*): `Object`[]

► **splice**(start: *`number`*, deleteCount: *`number`*, ...items: *`Object`[]*): `Object`[]



*Inherited from Array.splice*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1157*



Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number`   |  The number of elements to remove. |





**Returns:** `Object`[]



*Inherited from Array.splice*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1164*



Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| start | `number`   |  The zero-based location in the array from which to start removing elements. |
| deleteCount | `number`   |  The number of elements to remove. |
| items | `Object`[]   |  Elements to insert into the array in place of the deleted elements. |





**Returns:** `Object`[]





___

<a id="tolocalestring"></a>

###  toLocaleString

► **toLocaleString**(): `string`



*Inherited from Array.toLocaleString*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1108*



Returns a string representation of an array. The elements are converted to string using thier toLocalString methods.




**Returns:** `string`





___

<a id="tostring"></a>

###  toString

► **toString**(): `string`



*Inherited from Array.toString*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1104*



Returns a string representation of an array.




**Returns:** `string`





___

<a id="unshift"></a>

###  unshift

► **unshift**(...items: *`Object`[]*): `number`



*Inherited from Array.unshift*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:1169*



Inserts new elements at the start of an array.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| items | `Object`[]   |  Elements to insert at the start of the Array. |





**Returns:** `number`





___

<a id="values"></a>

###  values

► **values**(): `IterableIterator`.<`Object`>



*Inherited from Array.values*

*Defined in /Users/dev/workspace/analyticsfire/mutator-io-full/mutator-io/packages/mutator-io/node_modules/typedoc/node_modules/typescript/lib/lib.es6.d.ts:4795*



Returns an iterable of values in the array




**Returns:** `IterableIterator`.<`Object`>





___


