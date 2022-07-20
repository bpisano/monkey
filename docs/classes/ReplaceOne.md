[monkey](../README.md) / [Exports](../modules.md) / ReplaceOne

# Class: ReplaceOne<T\>

Replace one document in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`\>\>

## Table of contents

### Constructors

- [constructor](ReplaceOne.md#constructor)

### Methods

- [modifier](ReplaceOne.md#modifier)
- [where](ReplaceOne.md#where)
- [withId](ReplaceOne.md#withid)

## Constructors

### constructor

• **new ReplaceOne**<`T`\>(`callback`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`query`: `Model`<`T`, {}, {}, {}, `any`\>) => `void` |

#### Defined in

[queryModifiers/replaceOne.ts:11](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/replaceOne.ts#L11)

## Methods

### modifier

▸ **modifier**(`input`): [`Operation`](../interfaces/Operation.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Model`<`T`, {}, {}, {}, `any`\> |

#### Returns

[`Operation`](../interfaces/Operation.md)<`T`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/replaceOne.ts:39](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/replaceOne.ts#L39)

___

### where

▸ `Static` **where**<`T`\>(`filter`, `replacement`): [`ReplaceOne`](ReplaceOne.md)<`T`\>

Filter the documents with a given object to replace.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | The object to filter the documents with. |
| `replacement` | `any` | The replacement object. |

#### Returns

[`ReplaceOne`](ReplaceOne.md)<`T`\>

A new ReplaceOne instance.

#### Defined in

[queryModifiers/replaceOne.ts:35](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/replaceOne.ts#L35)

___

### withId

▸ `Static` **withId**<`T`\>(`id`, `replacement`): [`ReplaceOne`](ReplaceOne.md)<`T`\>

Filter the documents with a given id to replace.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the document to replace. |
| `replacement` | `any` | The replacement object. |

#### Returns

[`ReplaceOne`](ReplaceOne.md)<`T`\>

A new ReplaceOne instance.

#### Defined in

[queryModifiers/replaceOne.ts:22](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/replaceOne.ts#L22)
