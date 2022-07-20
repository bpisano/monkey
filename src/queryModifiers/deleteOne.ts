import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Delete one document in a collection.
 */
export class DeleteOne<T> implements QueryModifier<Model<T>, Operation<T>> {
  private constructor(private readonly callback: (query: Model<T>) => void) {}

  /**
   * Filter the documents with a given id to delete.
   * @param id
   * The id of the document to delete.
   * @returns
   * A new DeleteOne instance.
   */
  public static withId<T>(id: string): DeleteOne<T> {
    return new DeleteOne((query) => query.findByIdAndDelete(id));
  }

  public modifier(input: Model<T>): Operation<T> {
    const operation: MongooseOperation = this.callback(input);
    return new DBOperation(operation);
  }
}
