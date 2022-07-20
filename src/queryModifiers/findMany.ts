import { Model } from 'mongoose';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongoosePrimaryType } from '../utils/types/mongoosePrimaryType';
import { MongooseQuery } from '../utils/types/mongooseQuery';

/**
 * Find multiple documents in a collection.
 */
export class FindMany<T> implements QueryModifier<Model<T>, Query<T[]>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseQuery) {}

  /**
   * Find all documents in a collection.
   * @returns
   * A new FindMany instance.
   */
  public static all<T>(): FindMany<T> {
    return new FindMany((model: Model<T>) => model.find());
  }

  /**
   * Filter the documents with a filter object.
   * @param filter
   * A filter to apply to the documents.
   * @returns
   * A new FindMany instance.
   */
  public static where<T>(filter: any): FindMany<T> {
    return new FindMany((model: Model<T>) => model.find(filter));
  }

  /**
   * Filter the documents where a given property equals a given value.
   * @param key
   * The key of the property to filter on.
   * @param value
   * The value of the property to filter on.
   * @returns
   * A new FindMany instance.
   */
  public static whereKeyEquals<T>(key: string, value: MongoosePrimaryType): FindMany<T> {
    const filters: any = { [key]: value };
    return new FindMany((model: Model<T>) => model.find(filters));
  }

  public modifier(input: Model<T>): DBQuery<T[]> {
    const query: MongooseQuery = this.callback(input);
    return new DBQuery<T[]>(query);
  }
}
