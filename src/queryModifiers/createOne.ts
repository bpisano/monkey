import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Create one document in a collection.
 */
export class CreateOne<T> implements QueryModifier<Model<T>, Operation<T>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  /**
   * Use an object to create a document in a collection.
   * @param data
   * An object to create a document in a collection.
   * @returns
   * A new CreateOne instance.
   * @example
   * ```ts
   * const createdUser = await db.perform(
   *  MongoDBQuery.withModel(userModel)
   *    .modifier(
   *      CreateOne.withData({ name: 'John Doe' })
   *    )
   * )
   * ```

   */
  public static withData<T>(data: any): CreateOne<T> {
    return new CreateOne((model: Model<T>) => model.create(data));
  }

  public modifier(input: Model<T>): DBOperation<T> {
    const operation: MongooseOperation = this.callback(input);
    return new DBOperation(operation);
  }
}
