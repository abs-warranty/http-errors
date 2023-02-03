[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / ConflictError

# Class: ConflictError

Custom error denoting a resource is in conflict

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`ConflictError`**

## Table of contents

### Constructors

- [constructor](ConflictError.md#constructor)

### Properties

- [externalMessage](ConflictError.md#externalmessage)
- [json](ConflictError.md#json)
- [message](ConflictError.md#message)
- [name](ConflictError.md#name)
- [response](ConflictError.md#response)
- [stack](ConflictError.md#stack)
- [statusCode](ConflictError.md#statuscode)

## Constructors

### constructor

• **new ConflictError**(`message`, `externalMessage`)

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
