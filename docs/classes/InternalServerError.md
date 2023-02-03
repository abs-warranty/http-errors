[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / InternalServerError

# Class: InternalServerError

Custom error denoting an internal server error (HTTP 500)

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`InternalServerError`**

## Table of contents

### Constructors

- [constructor](InternalServerError.md#constructor)

### Properties

- [externalMessage](InternalServerError.md#externalmessage)
- [json](InternalServerError.md#json)
- [message](InternalServerError.md#message)
- [name](InternalServerError.md#name)
- [response](InternalServerError.md#response)
- [stack](InternalServerError.md#stack)
- [statusCode](InternalServerError.md#statuscode)

## Constructors

### constructor

• **new InternalServerError**(`message`, `externalMessage`)

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
