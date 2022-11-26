[Monkey 🐒 - v0.1.5](../README.md) / Offset

# Class: Offset<T\>

Skip the first n results of a query.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyArray`](../README.md#anyarray) |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<[`Query`](../interfaces/Query.md)<`T`\>, [`Query`](../interfaces/Query.md)<`T`\>\>

## Table of contents

### Methods

- [by](Offset.md#by)
- [modifier](Offset.md#modifier)

## Methods

### by

▸ `Static` **by**<`T`\>(`offset`): [`Offset`](Offset.md)<`T`\>

Offset with a given count.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` | The number of documents to skip. |

#### Returns

[`Offset`](Offset.md)<`T`\>

A new Offset instance.

#### Defined in

queryModifiers/offset.ts:20

___

### modifier

▸ **modifier**(`input`): [`Query`](../interfaces/Query.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Query`](../interfaces/Query.md)<`T`\> |

#### Returns

[`Query`](../interfaces/Query.md)<`T`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

queryModifiers/offset.ts:24
