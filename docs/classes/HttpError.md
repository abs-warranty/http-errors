[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / HttpError

# Class: HttpError

Generic HTTP errors have JSON message and status

## Hierarchy

- `Error`

  ↳ **`HttpError`**

  ↳↳ [`BadRequestError`](BadRequestError.md)

  ↳↳ [`UnauthorizedError`](UnauthorizedError.md)

  ↳↳ [`ForbiddenError`](ForbiddenError.md)

  ↳↳ [`NotFoundError`](NotFoundError.md)

  ↳↳ [`NotAllowedError`](NotAllowedError.md)

  ↳↳ [`ConflictError`](ConflictError.md)

  ↳↳ [`IAmATeapotError`](IAmATeapotError.md)

  ↳↳ [`EnhanceYourCalmError`](EnhanceYourCalmError.md)

  ↳↳ [`UnprocessableEntityError`](UnprocessableEntityError.md)

  ↳↳ [`InternalServerError`](InternalServerError.md)

## Table of contents

### Constructors

- [constructor](HttpError.md#constructor)

### Properties

- [externalMessage](HttpError.md#externalmessage)
- [json](HttpError.md#json)
- [message](HttpError.md#message)
- [name](HttpError.md#name)
- [response](HttpError.md#response)
- [stack](HttpError.md#stack)
- [statusCode](HttpError.md#statuscode)

## Constructors

### constructor

• **new HttpError**(`statusCode`, `message`, `externalMessage`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `message` | `string` |
| `externalMessage` | `string` \| `boolean` |

#### Overrides

Error.constructor

## Properties

### externalMessage

• **externalMessage**: `string` \| ``false``

___

### json

• **json**: { `error`: `string` ; `statusCode`: `number`  } \| { `error`: `string` ; `message`: `string` \| ``false`` ; `statusCode`: `number`  }

___

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### response

• **response**: `string`

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### statusCode

• **statusCode**: `number`
