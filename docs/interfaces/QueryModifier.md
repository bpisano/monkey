[Monkey 🐒 - v0.1.8](../README.md) / QueryModifier

# Interface: QueryModifier<Input, Output\>

A modifier that returns a new query.

## Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

## Implemented by

- [`Count`](../classes/Count.md)
- [`CreateMany`](../classes/CreateMany.md)
- [`CreateOne`](../classes/CreateOne.md)
- [`DeleteMany`](../classes/DeleteMany.md)
- [`DeleteOne`](../classes/DeleteOne.md)
- [`Exists`](../classes/Exists.md)
- [`FindMany`](../classes/FindMany.md)
- [`FindOne`](../classes/FindOne.md)
- [`Limit`](../classes/Limit.md)
- [`Offset`](../classes/Offset.md)
- [`Populate`](../classes/Populate.md)
- [`ReplaceOne`](../classes/ReplaceOne.md)
- [`Sort`](../classes/Sort.md)
- [`UpdateMany`](../classes/UpdateMany.md)
- [`UpdateOne`](../classes/UpdateOne.md)

## Table of contents

### Methods

- [modifier](QueryModifier.md#modifier)

## Methods

### modifier

▸ **modifier**(`input`): `Output`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

#### Returns

`Output`

#### Defined in

[interfaces/queryModifier.ts:5](https://github.com/bpisano/monkey/blob/b5eb9a8/src/interfaces/queryModifier.ts#L5)
