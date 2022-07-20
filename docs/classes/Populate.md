[Monkey 🐒 - v0.1.0](../README.md) / Populate

# Class: Populate<T\>

Populate a query's documents.

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`QueryModifier`](../interfaces/QueryModifier.md)<[`Performable`](../interfaces/Performable.md)<`T`\>, [`Query`](../interfaces/Query.md)<`T`\>\>

## Table of contents

### Methods

- [properties](Populate.md#properties)
- [with](Populate.md#with)
- [modifier](Populate.md#modifier)

## Methods

### properties

▸ `Static` **properties**<`T`\>(`fields`): [`Populate`](Populate.md)<`T`\>

Populate the query with the given properties.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `string`[] | The properties to populate. |

#### Returns

[`Populate`](Populate.md)<`T`\>

A new Populate instance.

#### Defined in

[queryModifiers/populate.ts:20](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/populate.ts#L20)

___

### with

▸ `Static` **with**<`T`\>(`population`): [`Populate`](Populate.md)<`T`\>

Populate the query with the given population object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `population` | `any`[] | The population object to populate. |

#### Returns

[`Populate`](Populate.md)<`T`\>

A new Populate instance.

#### Defined in

[queryModifiers/populate.ts:31](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/populate.ts#L31)

___

### modifier

▸ **modifier**(`input`): [`DBQuery`](DBQuery.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`Performable`](../interfaces/Performable.md)<`T`\> |

#### Returns

[`DBQuery`](DBQuery.md)<`T`\>

#### Implementation of

[QueryModifier](../interfaces/QueryModifier.md).[modifier](../interfaces/QueryModifier.md#modifier)

#### Defined in

[queryModifiers/populate.ts:35](https://github.com/bpisano/monkey/blob/62534c6/src/queryModifiers/populate.ts#L35)
