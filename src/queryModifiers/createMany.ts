import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Create multiple documents in a collection.
 */
export class CreateMany<T> implements QueryModifier<Model<T>, Operation<T>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  /**
   * Use an array of data to create multiple documents in a collection.
   * @param data
   * An array of data to create multiple documents in a collection.
   * @returns
   * A new CreateMany instance.
   * @example
   * ```ts
   * const createdUsers = await db.perform(
   *  MongoDBQuery.withModel(userModel)
   *    .modifier(
   *      CreateMany.withData([
   *        { name: 'John Doe' },
   *        { name: 'Jane Doe' }
   *      ])
   *    )
   * )
   * ```
   */
  public static withData<T>(data: any[]): CreateMany<T> {
    return new CreateMany((model: Model<T>) => model.create(data));
  }

  public modifier(input: Model<T>): DBOperation<T> {
    const operation: MongooseOperation = this.callback(input);
    return new DBOperation(operation);
  }
}
