[Monkey 🐒 - v0.1.0](../README.md) / UpdateMany

# Class: UpdateMany<T\>

Update multiple documents in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`[]\>\>

## Table of contents

### Methods

- [where](UpdateMany.md#where)
- [modifier](UpdateMany.md#modifier)

## Methods

### where

▸ `Static` **where**<`T`\>(`filter`, `update`): [`UpdateMany`](UpdateMany.md)<`T`\>

Filter the documents to update.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | A filter to apply to the documents to update. |
| `update` | `any` | The update to apply to the documents. |

#### Returns

[`UpdateMany`](UpdateMany.md)<`T`\>

A new UpdateMany instance.

#### Defined in

[queryModifiers/updateMany.ts:22](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/updateMany.ts#L22)

___

### modifier

▸ **modifier**(`input`): [`DBOperation`](DBOperation.md)<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Model`<`T`, {}, {}, {}, `any`\> |

#### Returns

[`DBOperation`](DBOperation.md)<`T`[]\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/updateMany.ts:26](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/updateMany.ts#L26)
