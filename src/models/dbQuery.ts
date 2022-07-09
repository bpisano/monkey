import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { MongooseQuery } from '../utils/types/mongooseQuery';

export class DBQuery<Document> implements Query<Document> {
  public constructor(public readonly mongooseQuery: MongooseQuery) {}

  public get databaseQuery(): any {
    return this.mongooseQuery;
  }

  public modifier<Output>(input: QueryModifier<Query<Document>, Query<Output>>): Query<Output> {
    return input.modifier(this);
  }
}
