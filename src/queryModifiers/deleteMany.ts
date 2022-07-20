import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Delete multiple documents in a collection.
 */
export class DeleteMany<T> implements QueryModifier<Model<T>, Operation<T[]>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  /**
   * Filter the documents to delete.
   * @param filter
   * A filter to apply to the documents to delete.
   * @returns
   * A new DeleteMany instance.
   */
  public static where<T>(filter: any): DeleteMany<T> {
    return new DeleteMany((model: Model<T>) => model.deleteMany(filter));
  }

  public modifier(input: Model<T>): DBOperation<T> {
    const query: MongooseOperation = this.callback(input);
    return new DBOperation(query);
  }
}
