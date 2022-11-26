[Monkey 🐒 - v0.1.6](../README.md) / Count

# Class: Count<T\>

Count the number of documents in a collection.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Query`](../interfaces/Query.md)<`number`\>\>

## Table of contents

### Methods

- [documents](Count.md#documents)
- [where](Count.md#where)
- [estimate](Count.md#estimate)
- [modifier](Count.md#modifier)

## Methods

### documents

▸ `Static` **documents**<`T`\>(): [`Count`](Count.md)<`T`\>

Count the number of documents in a collection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Returns

[`Count`](Count.md)<`T`\>

A new Count instance.

#### Defined in

queryModifiers/count.ts:18

___

### where

▸ `Static` **where**<`T`\>(`filter`): [`Count`](Count.md)<`T`\>

Count the number of documents in a collection with a given filter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | A filter to apply to the documents. |

#### Returns

[`Count`](Count.md)<`T`\>

A new Count instance.

#### Defined in

queryModifiers/count.ts:29

___

### estimate

▸ `Static` **estimate**<`T`\>(): [`Count`](Count.md)<`T`\>

Estimate the number of documents in a collection.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Document`<`any`, `any`, `any`, `T`\> |

#### Returns

[`Count`](Count.md)<`T`\>

A new Count instance.

#### Defined in

queryModifiers/count.ts:38

___

### modifier

▸ **modifier**(`input`): [`Query`](../interfaces/Query.md)<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Model`<`T`, {}, {}, {}, `any`\> |

#### Returns

[`Query`](../interfaces/Query.md)<`number`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

queryModifiers/count.ts:42
