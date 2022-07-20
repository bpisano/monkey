import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Replace one document in a collection.
 */
export class ReplaceOne<T> implements QueryModifier<Model<T>, Operation<T>> {
  public constructor(private readonly callback: (query: Model<T>) => void) {}

  /**
   * Filter the documents with a given id to replace.
   * @param id
   * The id of the document to replace.
   * @param replacement
   * The replacement object.
   * @returns
   * A new ReplaceOne instance.
   */
  public static withId<T>(id: string, replacement: any): ReplaceOne<T> {
    return new ReplaceOne((query) => query.findOneAndReplace({ _id: id }, replacement));
  }

  /**
   * Filter the documents with a given object to replace.
   * @param filter
   * The object to filter the documents with.
   * @param replacement
   * The replacement object.
   * @returns
   * A new ReplaceOne instance.
   */
  public static where<T>(filter: any, replacement: any): ReplaceOne<T> {
    return new ReplaceOne((query) => query.findOneAndReplace(filter, replacement));
  }

  public modifier(input: Model<T>): Operation<T> {
    const operation: MongooseOperation = this.callback(input);
    return new DBOperation(operation);
  }
}
