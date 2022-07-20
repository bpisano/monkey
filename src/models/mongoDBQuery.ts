import { Document, Model } from 'mongoose';
import { QueryModifier } from '../interfaces/queryModifier';

/**
 * A class used to perform a MongoDB query or operation.
 */
export class MongoDBQuery<T extends Document> {
  private constructor(private readonly model: Model<T>) {}

  /**
   * Create a new MongoDBQuery instance using a given model.
   * @param model
   * The model to use for the query.
   * @returns
   * A new MongoDBQuery instance.
   */
  public static withModel<T extends Document>(model: Model<T>): MongoDBQuery<T> {
    return new MongoDBQuery(model);
  }

  public modifier<Output>(input: QueryModifier<Model<T>, Output>): Output {
    return input.modifier(this.model);
  }
}
