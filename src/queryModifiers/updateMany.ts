import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Update multiple documents in a collection.
 */
export class UpdateMany<T> implements QueryModifier<Model<T>, Operation<T[]>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  /**
   * Filter the documents to update.
   * @param filter
   * A filter to apply to the documents to update.
   * @param update
   * The update to apply to the documents.
   * @returns
   * A new UpdateMany instance.
   */
  public static where<T>(filter: any, update: any): UpdateMany<T> {
    return new UpdateMany((model: Model<T>) => model.updateMany(filter, update, { new: true }));
  }

  public modifier(input: Model<T>): DBOperation<T[]> {
    const query: MongooseOperation = this.callback(input);
    return new DBOperation(query);
  }
}
