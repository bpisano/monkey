monkey / [Exports](modules.md)

## ⚠️ Work in progress. Will be available soon.

# Monkey 🐒

A strongly typed, verbose implementation of Mongoose in Typescript.

- **Strongly typed**: prevents query mistakes at compile time.
- **Verbose**: use natural language to create queries.
- **Flexible**: create your own modifiers that fits your needs.
- **Fast**: use Mongoose as the engine.

```ts
const db = new MongoDB()
await db.connect('mongodb://127.0.0.1/my_database')

const users = await db.perform(
    MongoDBQuery.withModel(userModel)
        .modifier(FindMany.whereKeyEquals('emailVerified', true))
        .modifier(Sort.ascendingBy('name'))
        .modifier(Populate.properties(['friends']))
)
```

## Table of contents

## Installation

This package is distributed with npm.

```bash
npm install monkey
```

## Documentation

### Performing a request

To perform a request, you'll need to instantiate a `MongoDB` instance.

```ts
const db = new MongoDB()
await db.connect('mongodb://127.0.0.1/my_database')
```

Then, use the `MongoDBQuery` with the model corresponding to the collection you want to query.

```ts
// Returns all the users
const users = await db.perform(
    MongoDBQuery.withModel(userModel)
        .modifier(FindMany.all())
)
```

Use query modifiers to add parameters to your query using the `.modifier()` function. You can chain them, as many as you need, but note that query modifiers are order sensitive. That means you cannot start your query with a `Sort` modifier. For more infos, see [Creating query modifiers](#creating-query-modifiers).

```ts
// Returns all the users sorted by names
const users = await db.perform(
    MongoDBQuery.withModel(userModel)
        .modifier(FindMany.all())
        .modifier(Sort.ascendingBy('name'))
)
```

### Modifiers

#### Finding objects

`FindOne.withId()`

`FindMany.all()`

`FindMany.withFilters()`

`FindMany.whereKeyEquals()`

#### Creating objects

`CreateOne.withData()`

`CreateMany.withData()`

#### Updating objects

`UpdateOne.withId()`

`UpdateOne.where()`

`UpdateMany.where()`

#### Deleting objects

`DeleteOne.withId()`

#### Sorting

`Sort.ascendingBy()`

`Sort.descendingBy()`

#### Populating

`Populate.properties()`

#### Limiting

`Limit.to()`
