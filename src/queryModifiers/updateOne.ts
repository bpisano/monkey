import { Model } from 'mongoose';
import { Operation } from '../interfaces/operation';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBOperation } from '../models/dbOperation';
import { MongooseOperation } from '../utils/types/mongooseOperation';

export class UpdateOne<T> implements QueryModifier<Model<T>, Operation<T>> {
  private constructor(private readonly callback: (model: Model<T>) => MongooseOperation) {}

  public static withId<T>(id: string, update: any): UpdateOne<T> {
    return new UpdateOne((model: Model<T>) => model.findByIdAndUpdate(id, { $set: update }, { new: true }));
  }

  public static where<T>(filter: any, update: any): UpdateOne<T> {
    return new UpdateOne((model: Model<T>) => model.findByIdAndUpdate(filter, { $set: update }, { new: true }));
  }

  public modifier(input: Model<T>): DBOperation<T> {
    const query: MongooseOperation = this.callback(input);
    return new DBOperation(query);
  }
}
