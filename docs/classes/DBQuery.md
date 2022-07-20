[monkey](../README.md) / [Exports](../modules.md) / DBQuery

# Class: DBQuery<Document\>

A class that contains a MongoDB query.

## Type parameters

| Name |
| :------ |
| `Document` |

## Implements

- [`Query`](../interfaces/Query.md)<`Document`\>

## Table of contents

### Constructors

- [constructor](DBQuery.md#constructor)

### Properties

- [mongooseQuery](DBQuery.md#mongoosequery)

### Accessors

- [databaseQuery](DBQuery.md#databasequery)

### Methods

- [modifier](DBQuery.md#modifier)

## Constructors

### constructor

• **new DBQuery**<`Document`\>(`mongooseQuery`)

#### Type parameters

| Name |
| :------ |
| `Document` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mongooseQuery` | [`MongooseQuery`](../modules.md#mongoosequery) |

#### Defined in

[models/dbQuery.ts:9](https://github.com/bpisano/monkey/blob/e8932a5/src/models/dbQuery.ts#L9)

## Properties

### mongooseQuery

• `Readonly` **mongooseQuery**: [`MongooseQuery`](../modules.md#mongoosequery)

#### Implementation of

[Query](../interfaces/Query.md).[mongooseQuery](../interfaces/Query.md#mongoosequery)

#### Defined in

[models/dbQuery.ts:9](https://github.com/bpisano/monkey/blob/e8932a5/src/models/dbQuery.ts#L9)

## Accessors

### databaseQuery

• `get` **databaseQuery**(): `any`

#### Returns

`any`

#### Implementation of

[Query](../interfaces/Query.md).[databaseQuery](../interfaces/Query.md#databasequery)

#### Defined in

[models/dbQuery.ts:11](https://github.com/bpisano/monkey/blob/e8932a5/src/models/dbQuery.ts#L11)

## Methods

### modifier

▸ **modifier**<`Output`\>(`input`): [`Query`](../interfaces/Query.md)<`Output`\>

#### Type parameters

| Name |
| :------ |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`QueryModifier`](../interfaces/QueryModifier.md)<[`Query`](../interfaces/Query.md)<`Document`\>, [`Query`](../interfaces/Query.md)<`Output`\>\> |

#### Returns

[`Query`](../interfaces/Query.md)<`Output`\>

#### Implementation of

[Query](../interfaces/Query.md).[modifier](../interfaces/Query.md#modifier)

#### Defined in

[models/dbQuery.ts:15](https://github.com/bpisano/monkey/blob/e8932a5/src/models/dbQuery.ts#L15)
