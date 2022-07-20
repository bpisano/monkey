[monkey](../README.md) / [Exports](../modules.md) / Sort

# Class: Sort<T\>

Sort the result of a query.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<[`Query`](../interfaces/Query.md)<`T`\>, [`Query`](../interfaces/Query.md)<`T`\>\>

## Table of contents

### Methods

- [modifier](Sort.md#modifier)
- [ascendingBy](Sort.md#ascendingby)
- [descendingBy](Sort.md#descendingby)

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

[queryModifiers/sort.ts:34](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/sort.ts#L34)

___

### ascendingBy

▸ `Static` **ascendingBy**<`T`\>(`field`): [`Sort`](Sort.md)<`T`\>

Sort ascending by the given field.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `string` | The field to sort by. |

#### Returns

[`Sort`](Sort.md)<`T`\>

A new Sort instance.

#### Defined in

[queryModifiers/sort.ts:19](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/sort.ts#L19)

___

### descendingBy

▸ `Static` **descendingBy**<`T`\>(`field`): [`Sort`](Sort.md)<`T`\>

Sort descending by the given field.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `string` | The field to sort by. |

#### Returns

[`Sort`](Sort.md)<`T`\>

A new Sort instance.

#### Defined in

[queryModifiers/sort.ts:30](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/sort.ts#L30)
