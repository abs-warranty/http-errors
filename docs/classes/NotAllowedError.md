[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / NotAllowedError

# Class: NotAllowedError

Custom error denoting the method used is not allowed for this endpoint (HTTP 405)

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`NotAllowedError`**

## Table of contents

### Constructors

- [constructor](NotAllowedError.md#constructor)

### Properties

- [externalMessage](NotAllowedError.md#externalmessage)
- [json](NotAllowedError.md#json)
- [message](NotAllowedError.md#message)
- [name](NotAllowedError.md#name)
- [response](NotAllowedError.md#response)
- [stack](NotAllowedError.md#stack)
- [statusCode](NotAllowedError.md#statuscode)

## Constructors

### constructor

• **new NotAllowedError**(`message`, `externalMessage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `externalMessage` | `string` \| `boolean` |

#### Overrides

[HttpError](HttpError.md).[constructor](HttpError.md#constructor)

## Properties

### externalMessage

• **externalMessage**: `string` \| ``false``

#### Inherited from

[HttpError](HttpError.md).[externalMessage](HttpError.md#externalmessage)

___

### json

• **json**: { `error`: `string` ; `statusCode`: `number`  } \| { `error`: `string` ; `message`: `string` \| ``false`` ; `statusCode`: `number`  }

#### Inherited from

[HttpError](HttpError.md).[json](HttpError.md#json)

___

### message

• **message**: `string`

#### Inherited from

[HttpError](HttpError.md).[message](HttpError.md#message)

___

### name

• **name**: `string`

#### Inherited from

[HttpError](HttpError.md).[name](HttpError.md#name)

___

### response

• **response**: `string`

#### Inherited from

[HttpError](HttpError.md).[response](HttpError.md#response)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[HttpError](HttpError.md).[stack](HttpError.md#stack)

___

### statusCode

• **statusCode**: `number`

#### Inherited from

[HttpError](HttpError.md).[statusCode](HttpError.md#statuscode)
