[Monkey 🐒 - v0.1.8](../README.md) / FindOne

# Class: FindOne<T\>

Find one document in a collection.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Query`](../interfaces/Query.md)<`T`\>\>

## Table of contents

### Methods

- [withId](FindOne.md#withid)
- [where](FindOne.md#where)
- [modifier](FindOne.md#modifier)

## Methods

### withId

▸ `Static` **withId**<`T`\>(`id`): [`FindOne`](FindOne.md)<`T`\>

Filter the documents with a given id.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the document to find. |

#### Returns

[`FindOne`](FindOne.md)<`T`\>

A new FindOne instance.

#### Defined in

[queryModifiers/findOne.ts:20](https://github.com/bpisano/monkey/blob/b5eb9a8/src/queryModifiers/findOne.ts#L20)

___

### where

▸ `Static` **where**<`T`\>(`filter`): [`FindOne`](FindOne.md)<`T`\>

Filter the documents with a filter object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | A filter to apply to the documents. |

#### Returns

[`FindOne`](FindOne.md)<`T`\>

A new FindOne instance.

#### Defined in

[queryModifiers/findOne.ts:31](https://github.com/bpisano/monkey/blob/b5eb9a8/src/queryModifiers/findOne.ts#L31)

___

### modifier

▸ **modifier**(`input`): [`DBQuery`](DBQuery.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Model`<`T`, {}, {}, {}, `any`\> |

#### Returns

[`DBQuery`](DBQuery.md)<`T`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/findOne.ts:35](https://github.com/bpisano/monkey/blob/b5eb9a8/src/queryModifiers/findOne.ts#L35)
