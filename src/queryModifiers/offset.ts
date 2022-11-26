import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { AnyArray } from '../utils/types/anyArray';
import { MongooseQuery } from '../utils/types/mongooseQuery';

/**
 * Skip the first n results of a query.
 */
export class Offset<T extends AnyArray> implements QueryModifier<Query<T>, Query<T>> {
  private constructor(private readonly offset: number) {}

  /**
   * Offset with a given count.
   * @param offset
   * The number of documents to skip.
   * @returns
   * A new Offset instance.
   */
  public static by<T extends AnyArray>(offset: number): Offset<T> {
    return new Offset(offset);
  }

  public modifier(input: Query<T>): Query<T> {
    const query: MongooseQuery = input.mongooseQuery.skip(this.offset);
    return new DBQuery<T>(query);
  }
}
