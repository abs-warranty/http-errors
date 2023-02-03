[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / BadRequestError

# Class: BadRequestError

Custom error denoting a bad request was made (HTTP 400)

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`BadRequestError`**

## Table of contents

### Constructors

- [constructor](BadRequestError.md#constructor)

### Properties

- [externalMessage](BadRequestError.md#externalmessage)
- [json](BadRequestError.md#json)
- [message](BadRequestError.md#message)
- [name](BadRequestError.md#name)
- [response](BadRequestError.md#response)
- [stack](BadRequestError.md#stack)
- [statusCode](BadRequestError.md#statuscode)

## Constructors

### constructor

• **new BadRequestError**(`message`, `externalMessage`)

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
