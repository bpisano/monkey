[monkey](../README.md) / [Exports](../modules.md) / CreateOne

# Class: CreateOne<T\>

Create one document in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`\>\>

## Table of contents

### Methods

- [modifier](CreateOne.md#modifier)
- [withData](CreateOne.md#withdata)

## Methods

### modifier

▸ **modifier**(`input`): [`DBOperation`](DBOperation.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Model`<`T`, {}, {}, {}, `any`\> |

#### Returns

[`DBOperation`](DBOperation.md)<`T`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/createOne.ts:24](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/createOne.ts#L24)

___

### withData

▸ `Static` **withData**<`T`\>(`data`): [`CreateOne`](CreateOne.md)<`T`\>

Use an object to create a document in a collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | An object to create a document in a collection. |

#### Returns

[`CreateOne`](CreateOne.md)<`T`\>

A new CreateOne instance.

#### Defined in

[queryModifiers/createOne.ts:20](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/createOne.ts#L20)
