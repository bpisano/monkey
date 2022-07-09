import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

export class UpdateMany<T> implements QueryModifier<Model<T>, Operation<T[]>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  public static where<T>(filter: any, update: any): UpdateMany<T> {
    return new UpdateMany((model: Model<T>) => model.updateMany(filter, { $set: update }, { new: true }));
  }

  public modifier(input: Model<T>): DBOperation<T[]> {
    const query: MongooseOperation = this.callback(input);
    return new DBOperation(query);
  }
}
