[Monkey 🐒 - v0.1.0](../README.md) / Exists

# Class: Exists<T\>

Test is a document exists in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`boolean`\>\>

## Table of contents

### Methods

- [withId](Exists.md#withid)
- [where](Exists.md#where)
- [modifier](Exists.md#modifier)

## Methods

### withId

▸ `Static` **withId**<`T`\>(`id`): [`Exists`](Exists.md)<`T`\>

Filter the document with a given id.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the document to find. |

#### Returns

[`Exists`](Exists.md)<`T`\>

A new Exists instance.

#### Defined in

[queryModifiers/exists.ts:20](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/exists.ts#L20)

___

### where

▸ `Static` **where**<`T`\>(`filter`): [`Exists`](Exists.md)<`T`\>

Filter the documents with a given object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | The object to filter the documents with. |

#### Returns

[`Exists`](Exists.md)<`T`\>

A new Exists instance.

#### Defined in

[queryModifiers/exists.ts:31](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/exists.ts#L31)

___

### modifier

▸ **modifier**(`input`): [`Operation`](../interfaces/Operation.md)<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Model`<`T`, {}, {}, {}, `any`\> |

#### Returns

[`Operation`](../interfaces/Operation.md)<`boolean`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/exists.ts:35](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/exists.ts#L35)
