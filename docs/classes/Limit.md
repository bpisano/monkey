[monkey](../README.md) / [Exports](../modules.md) / Limit

# Class: Limit<T\>

Limit the result count of a query.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`AnyArray`](../modules.md#anyarray) |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<[`Query`](../interfaces/Query.md)<`T`\>, [`Query`](../interfaces/Query.md)<`T`\>\>

## Table of contents

### Methods

- [modifier](Limit.md#modifier)
- [to](Limit.md#to)

## Methods

### modifier

▸ **modifier**(`input`): [`DBQuery`](DBQuery.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Query`](../interfaces/Query.md)<`T`\> |

#### Returns

[`DBQuery`](DBQuery.md)<`T`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/limit.ts:24](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/limit.ts#L24)

___

### to

▸ `Static` **to**<`T`\>(`limit`): [`Limit`](Limit.md)<`T`\>

Limit with a given count.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `limit` | `number` | The number of documents to limit the result to. |

#### Returns

[`Limit`](Limit.md)<`T`\>

A new Limit instance.

#### Defined in

[queryModifiers/limit.ts:20](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/limit.ts#L20)
