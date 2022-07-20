[Monkey 🐒 - v0.1.0](../README.md) / DeleteOne

# Class: DeleteOne<T\>

Delete one document in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`\>\>

## Table of contents

### Methods

- [withId](DeleteOne.md#withid)
- [modifier](DeleteOne.md#modifier)

## Methods

### withId

▸ `Static` **withId**<`T`\>(`id`): [`DeleteOne`](DeleteOne.md)<`T`\>

Filter the documents with a given id to delete.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the document to delete. |

#### Returns

[`DeleteOne`](DeleteOne.md)<`T`\>

A new DeleteOne instance.

#### Defined in

[queryModifiers/deleteOne.ts:20](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/deleteOne.ts#L20)

___

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

[queryModifiers/deleteOne.ts:24](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/deleteOne.ts#L24)
