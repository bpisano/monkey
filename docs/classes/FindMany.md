[monkey](../README.md) / [Exports](../modules.md) / FindMany

# Class: FindMany<T\>

Find multiple documents in a collection.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<`Model`<`T`\>, [`Query`](../interfaces/Query.md)<`T`[]\>\>

## Table of contents

### Methods

- [modifier](FindMany.md#modifier)
- [all](FindMany.md#all)
- [where](FindMany.md#where)
- [whereKeyEquals](FindMany.md#wherekeyequals)

## Methods

### modifier

▸ **modifier**(`input`): [`DBQuery`](DBQuery.md)<`T`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Model`<`T`, {}, {}, {}, `any`\> |

#### Returns

[`DBQuery`](DBQuery.md)<`T`[]\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/findMany.ts:48](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/findMany.ts#L48)

___

### all

▸ `Static` **all**<`T`\>(): [`FindMany`](FindMany.md)<`T`\>

Find all documents in a collection.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`FindMany`](FindMany.md)<`T`\>

A new FindMany instance.

#### Defined in

[queryModifiers/findMany.ts:19](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/findMany.ts#L19)

___

### where

▸ `Static` **where**<`T`\>(`filter`): [`FindMany`](FindMany.md)<`T`\>

Filter the documents with a filter object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | `any` | A filter to apply to the documents. |

#### Returns

[`FindMany`](FindMany.md)<`T`\>

A new FindMany instance.

#### Defined in

[queryModifiers/findMany.ts:30](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/findMany.ts#L30)

___

### whereKeyEquals

▸ `Static` **whereKeyEquals**<`T`\>(`key`, `value`): [`FindMany`](FindMany.md)<`T`\>

Filter the documents where a given property equals a given value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The key of the property to filter on. |
| `value` | [`MongoosePrimaryType`](../modules.md#mongooseprimarytype) | The value of the property to filter on. |

#### Returns

[`FindMany`](FindMany.md)<`T`\>

A new FindMany instance.

#### Defined in

[queryModifiers/findMany.ts:43](https://github.com/bpisano/monkey/blob/e8932a5/src/queryModifiers/findMany.ts#L43)
