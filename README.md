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

- [Installation](installation)
- [Documentation](documentation)
    - [Query modifiers](query-modifiers)
    - [Performing a request](performing-a-request)
    - [Creating query modifiers](creating-query-modifiers)
    - [Mocking data](mocking-data)
- [Contribution](contribution)
- [Roadmap](roadmap)

## Installation

This package is distributed with npm.

```bash
# npm
npm install monkey-db

# yarn
yarn add monkey-db
```

## Documentation

### Query modifiers

See all query modifiers in the [package documentation](./docs/README.md).

### Performing a request

To perform a request, you'll need to instantiate a `MongoDB` instance and connect it to your MongoDB database.

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

### Creating query modifiers

Monkey comes with a bunch of query modifiers, but you can easily create your to better fits your needs.

Query modifiers takes an input, and returns a new output. As an output, you usually want to return either a `DBQuery` or a `DBOperation` depending of your needs.
- `DBQuery` contains a `mongooseQuery` property that represents a MongoDB query such as **finding**, **sorting** or **filtering**.
- `DBOperation` contains a `mongooseOperation` property that represents a MongoDB operation such as **creating**, **updating** or **deleting**.

Both of these types implements the `Performable` interface so you can always retrieve the mongoose query you are working with.

```ts
export interface Performable<T> {
    databaseQuery: MongooseQuery | MongooseOperation
}
```

---

#### Creating a query

Say you want to create a query that finds all your users with a `emailVerified` property set to true. You query modifier will take as input your mongoose model, and will output a `DBQuery`.

Declare the `class` as the following:

```ts
export class FindVerifiedUsers<T extends Document> implement QueryModifier<Model<T>, DBQuery<T>> {}
```

> `T` is the generic type that represents your mongoose model.

Then implements the `modifier()` method.

```ts
export class FindVerifiedUsers<T extends Document> implement QueryModifier<Model<T>, DBQuery<T>> {
    public modifier(input: Model<T>): DBOperation<T> {
        const query: MongooseQuery = input.find({ emailVerified: true })
        return new DBQuery(query)
    }
}
```

You can then use your query this way:

```ts
// Returns all the users with verified email
const verifiedUsers = await db.perform(
    MongoDBQuery.withModel(userModel)
        .modifier(new FindVerifiedUsers())
)
```

---

#### Creating an operation

Say you want to create an operation that create a new user and set its property `emailVerified` to true. You query modifier will take as input your mongoose model, and will output a `DBQuery`.

Declare the `class` as the following:

```ts
export class CreateVerifiedUser<T extends Document> implement QueryModifier<Model<T>, DBOperation<T>> {
    public constructor(data: any) {}
}
```

> `T` is the generic type that represents your mongoose model.

Then implements the `modifier()` method.

```ts
export class CreateVerifiedUser<T extends Document> implement QueryModifier<Model<T>, DBOperation<T>> {
    public constructor(private readonly data: any) {}

    public modifier(input: Model<T>): DBOperation<T> {
        const operation: MongooseOperation = input.create({ ...this.data, emailVerified: true })
        return new DBOperation(operation)
    }
}
```

You can then use your operation this way:

```ts
// Returns the created user with a `emailVerified` property set to true
const users = await db.perform(
    MongoDBQuery.withModel(userModel)
        .modifier(new CreateVerifiedUser({ username: 'bpisano' }))
)
```

## Contribution

Work is still in progress and contributions to Monkey are open and highly appreciated. When creating new query modifiers, make sure that:
- It it verbose. Make use of natural language as much as possible. This makes this package easy to get started with.
- It is generic enough. Try not to implement very specific use case in this package. Remember, anyone can easily create their own query modifier that fits their needs.

## Roadmap

- [ ] Implementing all the the operations and queries used by mongoose as query modifiers.
- [ ] Improving verbosity of filters. It would be nice to have something like:
```ts
FindMany.where(Property.named('username').equals('bpisano'))
```
