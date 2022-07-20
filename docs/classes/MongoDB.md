[monkey](../README.md) / [Exports](../modules.md) / MongoDB

# Class: MongoDB

The MongoDB database that can perform queries.

## Implements

- [`Database`](../interfaces/Database.md)

## Table of contents

### Constructors

- [constructor](MongoDB.md#constructor)

### Methods

- [connect](MongoDB.md#connect)
- [perform](MongoDB.md#perform)

## Constructors

### constructor

• **new MongoDB**()

## Methods

### connect

▸ **connect**(`url`, `options?`): `Promise`<`void`\>

Connect to the MongoDB database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the MongoDB database. |
| `options` | `ConnectOptions` | The options to use when connecting to the database. |

#### Returns

`Promise`<`void`\>

#### Defined in

[services/mongoDB.service.ts:16](https://github.com/bpisano/monkey/blob/e8932a5/src/services/mongoDB.service.ts#L16)

___

### perform

▸ **perform**<`Output`\>(`query`): `Promise`<`Output`\>

Perform a query on the MongoDB database.

#### Type parameters

| Name |
| :------ |
| `Output` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`Performable`](../interfaces/Performable.md)<`Output`\> | The query to perform. |

#### Returns

`Promise`<`Output`\>

The result of the query.

#### Implementation of

[Database](../interfaces/Database.md).[perform](../interfaces/Database.md#perform)

#### Defined in

[services/mongoDB.service.ts:28](https://github.com/bpisano/monkey/blob/e8932a5/src/services/mongoDB.service.ts#L28)
