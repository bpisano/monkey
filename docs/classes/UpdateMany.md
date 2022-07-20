[monkey](../README.md) / UpdateMany

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

- [modifier](UpdateMany.md#modifier)
- [where](UpdateMany.md#where)

## Methods

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

[queryModifiers/updateMany.ts:26](https://github.com/bpisano/monkey/blob/0cdd6dc/src/queryModifiers/updateMany.ts#L26)

___

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

[queryModifiers/updateMany.ts:22](https://github.com/bpisano/monkey/blob/0cdd6dc/src/queryModifiers/updateMany.ts#L22)
