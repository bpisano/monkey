import { Document, Model } from 'mongoose';
import { QueryModifier } from '../interfaces/queryModifier';

export class MongoDBQuery<T extends Document> {
  private constructor(private readonly model: Model<T>) {}

  public static withModel<T extends Document>(model: Model<T>): MongoDBQuery<T> {
    return new MongoDBQuery(model);
  }

  public modifier<Output>(input: QueryModifier<Model<T>, Output>): Output {
    return input.modifier(this.model);
  }
}
