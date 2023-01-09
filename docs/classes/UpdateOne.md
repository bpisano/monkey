[Monkey 🐒 - v0.1.8](../README.md) / UpdateOne

# Class: UpdateOne<T\>

Update one document in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`\>\>

## Table of contents

### Methods

- [withId](UpdateOne.md#withid)
- [where](UpdateOne.md#where)
- [modifier](UpdateOne.md#modifier)

## Methods

### withId

▸ `Static` **withId**<`T`\>(`id`, `update`, `options?`): [`UpdateOne`](UpdateOne.md)<`T`\>

Filter the document with a given id.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the document to find. |
| `update` | `any` | The update to apply to the document. |
| `options` | `any` | The update options to apply to the update. |

#### Returns

[`UpdateOne`](UpdateOne.md)<`T`\>

A new UpdateOne instance.

#### Defined in

[queryModifiers/updateOne.ts:24](https://github.com/bpisano/monkey/blob/b5eb9a8/src/queryModifiers/updateOne.ts#L24)

___

### where

▸ `Static` **where**<`T`\>(`filter`, `update`, `options?`): [`UpdateOne`](UpdateOne.md)<`T`\>

Filter the documents with a given object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | The object to filter the documents with. |
| `update` | `any` | The update to apply to the documents. |
| `options` | `any` | The update options to apply to the update. |

#### Returns

[`UpdateOne`](UpdateOne.md)<`T`\>

A new UpdateOne instance.

#### Defined in

[queryModifiers/updateOne.ts:39](https://github.com/bpisano/monkey/blob/b5eb9a8/src/queryModifiers/updateOne.ts#L39)

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

[queryModifiers/updateOne.ts:43](https://github.com/bpisano/monkey/blob/b5eb9a8/src/queryModifiers/updateOne.ts#L43)
