import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Update one document in a collection.
 */
export class UpdateOne<T> implements QueryModifier<Model<T>, Operation<T>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  /**
   * Filter the document with a given id.
   * @param id
   * The id of the document to find.
   * @param update
   * The update to apply to the document.
   * @param options
   * The update options to apply to the update.
   * @returns
   * A new UpdateOne instance.
   */
  public static withId<T>(id: string, update: any, options: any = { new: true }): UpdateOne<T> {
    return new UpdateOne((model: Model<T>) => model.findByIdAndUpdate(id, update, options));
  }

  /**
   * Filter the documents with a given object.
   * @param filter
   * The object to filter the documents with.
   * @param update
   * The update to apply to the documents.
   * @param options
   * The update options to apply to the update.
   * @returns
   * A new UpdateOne instance.
   */
  public static where<T>(filter: any, update: any, options: any = { new: true }): UpdateOne<T> {
    return new UpdateOne((model: Model<T>) => model.findOneAndUpdate(filter, update, options));
  }

  public modifier(input: Model<T>): DBOperation<T> {
    const query: MongooseOperation = this.callback(input);
    return new DBOperation(query);
  }
}
