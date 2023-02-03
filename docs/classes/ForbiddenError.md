[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / ForbiddenError

# Class: ForbiddenError

Custom error denoting the user has insufficient privileges (HTTP 403)

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`ForbiddenError`**

## Table of contents

### Constructors

- [constructor](ForbiddenError.md#constructor)

### Properties

- [externalMessage](ForbiddenError.md#externalmessage)
- [json](ForbiddenError.md#json)
- [message](ForbiddenError.md#message)
- [name](ForbiddenError.md#name)
- [response](ForbiddenError.md#response)
- [stack](ForbiddenError.md#stack)
- [statusCode](ForbiddenError.md#statuscode)

## Constructors

### constructor

• **new ForbiddenError**(`message`, `externalMessage`)

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
