[Monkey 🐒 - v0.1.7](../README.md) / DeleteMany

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

- [where](DeleteMany.md#where)
- [modifier](DeleteMany.md#modifier)

## Methods

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

[queryModifiers/deleteMany.ts:20](https://github.com/bpisano/monkey/blob/4b4580e/src/queryModifiers/deleteMany.ts#L20)

___

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

[queryModifiers/deleteMany.ts:24](https://github.com/bpisano/monkey/blob/4b4580e/src/queryModifiers/deleteMany.ts#L24)
