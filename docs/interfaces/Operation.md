[Monkey 🐒 - v0.1.8](../README.md) / Operation

# Interface: Operation<Document\>

An operation that can be performed on a MongoDB collection.

## Type parameters

| Name |
| :------ |
| `Document` |

## Hierarchy

- [`Performable`](Performable.md)<`Document`\>

  ↳ **`Operation`**

## Table of contents

### Properties

- [mongooseOperation](Operation.md#mongooseoperation)
- [databaseQuery](Operation.md#databasequery)

### Methods

- [modifier](Operation.md#modifier)

## Properties

### mongooseOperation

• **mongooseOperation**: `any`

#### Defined in

[interfaces/operation.ts:10](https://github.com/bpisano/monkey/blob/b5eb9a8/src/interfaces/operation.ts#L10)

___

### databaseQuery

• **databaseQuery**: `any`

#### Inherited from

[Performable](Performable.md).[databaseQuery](Performable.md#databasequery)

#### Defined in

[interfaces/performable.ts:9](https://github.com/bpisano/monkey/blob/b5eb9a8/src/interfaces/performable.ts#L9)

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
| `input` | [`QueryModifier`](QueryModifier.md)<[`Operation`](Operation.md)<`Document`\>, [`Query`](Query.md)<`Output`\>\> |

#### Returns

[`Query`](Query.md)<`Output`\>

#### Defined in

[interfaces/operation.ts:11](https://github.com/bpisano/monkey/blob/b5eb9a8/src/interfaces/operation.ts#L11)
