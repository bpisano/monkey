import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * Test is a document exists in a collection.
 */
export class Exists<T> implements QueryModifier<Model<T>, Operation<boolean>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  /**
   * Filter the document with a given id.
   * @param id
   * The id of the document to find.
   * @returns
   * A new Exists instance.
   */
  public static withId<T>(id: string): Exists<T> {
    return new Exists((model: Model<T>) => model.exists({ _id: id }));
  }

  /**
   * Filter the documents with a given object.
   * @param filter
   * The object to filter the documents with.
   * @returns
   * A new Exists instance.
   */
  public static where<T>(filter: any): Exists<T> {
    return new Exists((model: Model<T>) => model.exists(filter));
  }

  public modifier(input: Model<T>): Operation<boolean> {
    const operation: MongooseOperation = this.callback(input);
    return new DBOperation(operation);
  }
}
