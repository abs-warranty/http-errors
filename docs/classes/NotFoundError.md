[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / NotFoundError

# Class: NotFoundError

Custom error denoting a resource has not been found (HTTP 404)

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`NotFoundError`**

## Table of contents

### Constructors

- [constructor](NotFoundError.md#constructor)

### Properties

- [externalMessage](NotFoundError.md#externalmessage)
- [json](NotFoundError.md#json)
- [message](NotFoundError.md#message)
- [name](NotFoundError.md#name)
- [response](NotFoundError.md#response)
- [stack](NotFoundError.md#stack)
- [statusCode](NotFoundError.md#statuscode)

## Constructors

### constructor

• **new NotFoundError**(`message`, `externalMessage`)

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
