[Monkey 🐒 - v0.1.7](../README.md) / CreateOne

# Class: CreateOne<T\>

Create one document in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`\>\>

## Table of contents

### Methods

- [withData](CreateOne.md#withdata)
- [modifier](CreateOne.md#modifier)

## Methods

### withData

▸ `Static` **withData**<`T`\>(`data`): [`CreateOne`](CreateOne.md)<`T`\>

Use an object to create a document in a collection.

**`Example`**

```ts
const createdUser = await db.perform(
 MongoDBQuery.withModel(userModel)
   .modifier(
     CreateOne.withData({ name: 'John Doe' })
   )
)
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | An object to create a document in a collection. |

#### Returns

[`CreateOne`](CreateOne.md)<`T`\>

A new CreateOne instance.

#### Defined in

[queryModifiers/createOne.ts:30](https://github.com/bpisano/monkey/blob/4b4580e/src/queryModifiers/createOne.ts#L30)

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

[queryModifiers/createOne.ts:34](https://github.com/bpisano/monkey/blob/4b4580e/src/queryModifiers/createOne.ts#L34)
