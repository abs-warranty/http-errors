[@abs-warranty/http-errors - v1.0.2](../README.md) / [Exports](../modules.md) / EnhanceYourCalmError

# Class: EnhanceYourCalmError

Custom error denoting the user must enhance their frickin' calm, maaaan. 🌿

## Hierarchy

- [`HttpError`](HttpError.md)

  ↳ **`EnhanceYourCalmError`**

## Table of contents

### Constructors

- [constructor](EnhanceYourCalmError.md#constructor)

### Properties

- [externalMessage](EnhanceYourCalmError.md#externalmessage)
- [json](EnhanceYourCalmError.md#json)
- [message](EnhanceYourCalmError.md#message)
- [name](EnhanceYourCalmError.md#name)
- [response](EnhanceYourCalmError.md#response)
- [stack](EnhanceYourCalmError.md#stack)
- [statusCode](EnhanceYourCalmError.md#statuscode)

## Constructors

### constructor

• **new EnhanceYourCalmError**(`message`, `externalMessage`)

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
