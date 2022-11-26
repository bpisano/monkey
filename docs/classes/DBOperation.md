[Monkey 🐒 - v0.1.5](../README.md) / DBOperation

# Class: DBOperation<Document\>

A class that contains a MongoDB operation.

## Type parameters

| Name |
| :------ |
| `Document` |

## Table of contents

### Constructors

- [constructor](DBOperation.md#constructor)

### Properties

- [mongooseOperation](DBOperation.md#mongooseoperation)

### Accessors

- [databaseQuery](DBOperation.md#databasequery)

### Methods

- [modifier](DBOperation.md#modifier)

## Constructors

### constructor

• **new DBOperation**<`Document`\>(`mongooseOperation`)

#### Type parameters

| Name |
| :------ |
| `Document` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mongooseOperation` | `any` |

#### Defined in

[models/dbOperation.ts:10](https://github.com/bpisano/monkey/blob/9279d43/src/models/dbOperation.ts#L10)

## Properties

### mongooseOperation

• `Readonly` **mongooseOperation**: `any`

#### Defined in

[models/dbOperation.ts:10](https://github.com/bpisano/monkey/blob/9279d43/src/models/dbOperation.ts#L10)

## Accessors

### databaseQuery

• `get` **databaseQuery**(): `any`

#### Returns

`any`

#### Defined in

[models/dbOperation.ts:12](https://github.com/bpisano/monkey/blob/9279d43/src/models/dbOperation.ts#L12)

## Methods

### modifier

▸ **modifier**<`Output`\>(`input`): [`Query`](../interfaces/Query.md)<`Output`\>

#### Type parameters

| Name |
| :------ |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`QueryModifier`](../interfaces/QueryModifier.md)<[`Operation`](../interfaces/Operation.md)<`Document`\>, [`Query`](../interfaces/Query.md)<`Output`\>\> |

#### Returns

[`Query`](../interfaces/Query.md)<`Output`\>

#### Defined in

[models/dbOperation.ts:16](https://github.com/bpisano/monkey/blob/9279d43/src/models/dbOperation.ts#L16)
