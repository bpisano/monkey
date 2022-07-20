import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { AnyArray } from '../utils/types/anyArray';
import { MongooseQuery } from '../utils/types/mongooseQuery';

/**
 * Limit the result count of a query.
 */
export class Limit<T extends AnyArray> implements QueryModifier<Query<T>, Query<T>> {
  private constructor(private readonly limit: number) {}

  /**
   * Limit with a given count.
   * @param limit
   * The number of documents to limit the result to.
   * @returns
   * A new Limit instance.
   */
  public static to<T extends AnyArray>(limit: number): Limit<T> {
    return new Limit(limit);
  }

  public modifier(input: Query<T>): DBQuery<T> {
    const query: MongooseQuery = input.mongooseQuery.limit(1);
    return new DBQuery<T>(query);
  }
}
