[monkey](../README.md) / DeleteOne

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

- [modifier](DeleteOne.md#modifier)
- [withId](DeleteOne.md#withid)

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

[queryModifiers/deleteOne.ts:24](https://github.com/bpisano/monkey/blob/0cdd6dc/src/queryModifiers/deleteOne.ts#L24)

___

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

[queryModifiers/deleteOne.ts:20](https://github.com/bpisano/monkey/blob/0cdd6dc/src/queryModifiers/deleteOne.ts#L20)
