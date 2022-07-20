[Monkey 🐒 - v0.1.0](../README.md) / Query

# Interface: Query<Document\>

A query that can be performed on a MongoDB collection.

## Type parameters

| Name |
| :------ |
| `Document` |

## Hierarchy

- [`Performable`](Performable.md)<`Document`\>

  ↳ **`Query`**

## Implemented by

- [`DBQuery`](../classes/DBQuery.md)

## Table of contents

### Properties

- [mongooseQuery](Query.md#mongoosequery)
- [databaseQuery](Query.md#databasequery)

### Methods

- [modifier](Query.md#modifier)

## Properties

### mongooseQuery

• **mongooseQuery**: [`MongooseQuery`](../README.md#mongoosequery)

#### Defined in

[interfaces/query.ts:9](https://github.com/bpisano/monkey/blob/62534c6/src/interfaces/query.ts#L9)

___

### databaseQuery

• **databaseQuery**: `any`

#### Inherited from

[Performable](Performable.md).[databaseQuery](Performable.md#databasequery)

#### Defined in

[interfaces/performable.ts:9](https://github.com/bpisano/monkey/blob/62534c6/src/interfaces/performable.ts#L9)

## Methods

### modifier

▸ **modifier**<`Output`\>(`input`): [`Query`](Query.md)<`Output`\>

#### Type parameters

| Name |
| :------ |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`QueryModifier`](QueryModifier.md)<[`Query`](Query.md)<`Document`\>, [`Query`](Query.md)<`Output`\>\> |

#### Returns

[`Query`](Query.md)<`Output`\>

#### Defined in

[interfaces/query.ts:10](https://github.com/bpisano/monkey/blob/62534c6/src/interfaces/query.ts#L10)
