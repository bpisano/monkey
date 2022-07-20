[monkey](../README.md) / [Exports](../modules.md) / DeleteMany

# Class: DeleteMany<T\>

Delete multiple documents in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`[]\>\>

## Table of contents

### Methods

- [modifier](DeleteMany.md#modifier)
- [where](DeleteMany.md#where)

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

[queryModifiers/deleteMany.ts:24](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/deleteMany.ts#L24)

___

### where

▸ `Static` **where**<`T`\>(`filter`): [`DeleteMany`](DeleteMany.md)<`T`\>

Filter the documents to delete.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | A filter to apply to the documents to delete. |

#### Returns

[`DeleteMany`](DeleteMany.md)<`T`\>

A new DeleteMany instance.

#### Defined in

[queryModifiers/deleteMany.ts:20](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/deleteMany.ts#L20)
