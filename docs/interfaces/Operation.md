[monkey](../README.md) / Operation

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

- [databaseQuery](Operation.md#databasequery)
- [mongooseOperation](Operation.md#mongooseoperation)

### Methods

- [modifier](Operation.md#modifier)

## Properties

### databaseQuery

• **databaseQuery**: `any`

#### Inherited from

[Performable](Performable.md).[databaseQuery](Performable.md#databasequery)

#### Defined in

[interfaces/performable.ts:9](https://github.com/bpisano/monkey/blob/0cdd6dc/src/interfaces/performable.ts#L9)

___

### mongooseOperation

• **mongooseOperation**: `any`

#### Defined in

[interfaces/operation.ts:10](https://github.com/bpisano/monkey/blob/0cdd6dc/src/interfaces/operation.ts#L10)

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

[interfaces/operation.ts:11](https://github.com/bpisano/monkey/blob/0cdd6dc/src/interfaces/operation.ts#L11)
