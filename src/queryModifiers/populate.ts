import { Performable } from '../interfaces/performable';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongooseQuery } from '../utils/types/mongooseQuery';

export class Populate<T> implements QueryModifier<Performable<T>, Query<T>> {
  private constructor(private readonly fields: string[]) {}

  public static properties<T>(fields: string[]): Populate<T> {
    return new Populate(fields);
  }

  public modifier(input: Performable<T>): DBQuery<T> {
    const query: MongooseQuery = input.databaseQuery.populate(this.fields);
    return new DBQuery(query);
  }
}
