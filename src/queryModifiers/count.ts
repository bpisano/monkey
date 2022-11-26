import { Document, Model } from 'mongoose';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongooseQuery } from '../utils/types/mongooseQuery';

/**
 * Count the number of documents in a collection.
 */
export class Count<T extends Document> implements QueryModifier<Model<T>, Query<number>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseQuery) {}

  /**
   * Count the number of documents in a collection.
   * @returns
   * A new Count instance.
   */
  public static documents<T extends Document>(): Count<T> {
    return new Count((model: Model<T>) => model.countDocuments());
  }

  /**
   * Count the number of documents in a collection with a given filter.
   * @param filter
   * A filter to apply to the documents.
   * @returns
   * A new Count instance.
   */
  public static where<T extends Document>(filter: any): Count<T> {
    return new Count((model: Model<T>) => model.countDocuments(filter));
  }

  /**
   * Estimate the number of documents in a collection.
   * @returns
   * A new Count instance.
   */
  public static estimate<T extends Document>(): Count<T> {
    return new Count((model: Model<T>) => model.estimatedDocumentCount());
  }

  public modifier(input: Model<T>): Query<number> {
    const query: MongooseQuery = this.callback(input);
    return new DBQuery<T>(query);
  }
}
