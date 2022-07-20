[Monkey 🐒 - v0.1.0](../README.md) / Database

# Interface: Database

An interface representing database teh can perform queries.

## Implemented by

- [`MongoDB`](../classes/MongoDB.md)

## Table of contents

### Methods

- [perform](Database.md#perform)

## Methods

### perform

▸ **perform**<`Output`\>(`query`): `Promise`<`Output`\>

#### Type parameters

| Name |
| :------ |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Performable`](Performable.md)<`Output`\> |

#### Returns

`Promise`<`Output`\>

#### Defined in

[services/database.service.ts:7](https://github.com/bpisano/monkey/blob/62534c6/src/services/database.service.ts#L7)
