[monkey](../README.md) / [Exports](../modules.md) / Database

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

[services/database.service.ts:7](https://github.com/bpisano/monkey/blob/e8932a5/src/services/database.service.ts#L7)
