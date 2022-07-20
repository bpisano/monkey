import { Operation } from '../interfaces/operation';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { MongooseOperation } from '../utils/types/mongooseOperation';

/**
 * A class that contains a MongoDB operation.
 */
export class DBOperation<Document> {
  public constructor(public readonly mongooseOperation: MongooseOperation) {}

  public get databaseQuery(): any {
    return this.mongooseOperation;
  }

  public modifier<Output>(input: QueryModifier<Operation<Document>, Query<Output>>): Query<Output> {
    return input.modifier(this);
  }
}
