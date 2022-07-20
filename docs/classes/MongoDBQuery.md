[monkey](../README.md) / [Exports](../modules.md) / MongoDBQuery

# Class: MongoDBQuery<T\>

A class used to perform a MongoDB query or operation.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document` |

## Table of contents

### Methods

- [modifier](MongoDBQuery.md#modifier)
- [withModel](MongoDBQuery.md#withmodel)

## Methods

### modifier

▸ **modifier**<`Output`\>(`input`): `Output`

#### Type parameters

| Name |
| :------ |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`, {}, {}, {}, `any`\>, `Output`\> |

#### Returns

`Output`

#### Defined in

[models/mongoDBQuery.ts:21](https://github.com/bpisano/monkey/blob/e8932a5/src/models/mongoDBQuery.ts#L21)

___

### withModel

▸ `Static` **withModel**<`T`\>(`model`): [`MongoDBQuery`](MongoDBQuery.md)<`T`\>

Create a new MongoDBQuery instance using a given model.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `model` | `Model`<`T`, {}, {}, {}, `any`\> | The model to use for the query. |

#### Returns

[`MongoDBQuery`](MongoDBQuery.md)<`T`\>

A new MongoDBQuery instance.

#### Defined in

[models/mongoDBQuery.ts:17](https://github.com/bpisano/monkey/blob/e8932a5/src/models/mongoDBQuery.ts#L17)
