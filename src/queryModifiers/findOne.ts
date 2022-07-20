import { Document, Model } from 'mongoose';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongooseQuery } from '../utils/types/mongooseQuery';

/**
 * Find one document in a collection.
 */
export class FindOne<T extends Document> implements QueryModifier<Model<T>, Query<T>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseQuery) {}

  /**
   * Filter the documents with a given id.
   * @param id
   * The id of the document to find.
   * @returns
   * A new FindOne instance.
   */
  public static withId<T extends Document>(id: string): FindOne<T> {
    return new FindOne((model: Model<T>) => model.findById(id));
  }

  /**
   * Filter the documents with a filter object.
   * @param filter
   * A filter to apply to the documents.
   * @returns
   * A new FindOne instance.
   */
  public static where<T extends Document>(filter: any): FindOne<T> {
    return new FindOne((model: Model<T>) => model.findOne(filter));
  }

  public modifier(input: Model<T>): DBQuery<T> {
    const query: MongooseQuery = this.callback(input);
    return new DBQuery<T>(query);
  }
}
