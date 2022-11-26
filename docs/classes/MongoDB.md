[Monkey 🐒 - v0.1.7](../README.md) / MongoDB

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

[services/mongoDB.service.ts:18](https://github.com/bpisano/monkey/blob/4b4580e/src/services/mongoDB.service.ts#L18)

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

[services/mongoDB.service.ts:30](https://github.com/bpisano/monkey/blob/4b4580e/src/services/mongoDB.service.ts#L30)
