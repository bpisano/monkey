[Monkey 🐒 - v0.1.7](../README.md) / CreateMany

# Class: CreateMany<T\>

Create multiple documents in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Operation`](../interfaces/Operation.md)<`T`\>\>

## Table of contents

### Methods

- [withData](CreateMany.md#withdata)
- [modifier](CreateMany.md#modifier)

## Methods

### withData

▸ `Static` **withData**<`T`\>(`data`): [`CreateMany`](CreateMany.md)<`T`\>

Use an array of data to create multiple documents in a collection.

**`Example`**

```ts
const createdUsers = await db.perform(
 MongoDBQuery.withModel(userModel)
   .modifier(
     CreateMany.withData([
       { name: 'John Doe' },
       { name: 'Jane Doe' }
     ])
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
| `data` | `any`[] | An array of data to create multiple documents in a collection. |

#### Returns

[`CreateMany`](CreateMany.md)<`T`\>

A new CreateMany instance.

#### Defined in

[queryModifiers/createMany.ts:32](https://github.com/bpisano/monkey/blob/4b4580e/src/queryModifiers/createMany.ts#L32)

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

[queryModifiers/createMany.ts:36](https://github.com/bpisano/monkey/blob/4b4580e/src/queryModifiers/createMany.ts#L36)
