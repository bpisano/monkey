import { Document, Model } from 'mongoose';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongooseQuery } from '../utils/types/mongooseQuery';

export class FindOne<T extends Document> implements QueryModifier<Model<T>, Query<T>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseQuery) {}

  public static withId<T extends Document>(id: string): FindOne<T> {
    return new FindOne((model: Model<T>) => model.findById(id));
  }

  public modifier(input: Model<T>): DBQuery<T> {
    const query: MongooseQuery = this.callback(input);
    return new DBQuery<T>(query);
  }
}
