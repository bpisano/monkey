import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongooseQuery } from '../utils/types/mongooseQuery';

export class Sort<T> implements QueryModifier<Query<T>, Query<T>> {
  private constructor(private readonly callback: (query: Query<T>) => MongooseQuery) {}

  public static ascendingBy<T>(field: string): Sort<T> {
    return new Sort((query: Query<T>) => query.mongooseQuery.sort({ [field]: 1 }));
  }

  public static descendingBy<T>(field: string): Sort<T> {
    return new Sort((query: Query<T>) => query.mongooseQuery.sort({ [field]: -1 }));
  }

  public modifier(input: Query<T>): DBQuery<T> {
    const query: MongooseQuery = this.callback(input);
    return new DBQuery(query);
  }
}
