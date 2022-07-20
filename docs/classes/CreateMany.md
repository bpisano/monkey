[monkey](../README.md) / [Exports](../modules.md) / CreateMany

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

- [modifier](CreateMany.md#modifier)
- [withData](CreateMany.md#withdata)

## Methods

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

[queryModifiers/createMany.ts:24](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/createMany.ts#L24)

___

### withData

▸ `Static` **withData**<`T`\>(`data`): [`CreateMany`](CreateMany.md)<`T`\>

Use an array of data to create multiple documents in a collection.

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

[queryModifiers/createMany.ts:20](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/createMany.ts#L20)
