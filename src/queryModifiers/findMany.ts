import { Model } from 'mongoose';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongoosePrimaryType } from '../utils/types/mongoosePrimaryType';
import { MongooseQuery } from '../utils/types/mongooseQuery';

export class FindMany<T> implements QueryModifier<Model<T>, Query<T[]>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseQuery) {}

  public static all<T>(): FindMany<T> {
    return new FindMany((model: Model<T>) => model.find());
  }

  public static withFilters<T>(filters: any): FindMany<T> {
    return new FindMany((model: Model<T>) => model.find(filters));
  }

  public static whereKeyEquals<T>(key: string, value: MongoosePrimaryType): FindMany<T> {
    const filters: any = { [key]: value };
    return new FindMany((model: Model<T>) => model.find(filters));
  }

  public modifier(input: Model<T>): DBQuery<T[]> {
    const query: MongooseQuery = this.callback(input);
    return new DBQuery<T[]>(query);
  }
}
