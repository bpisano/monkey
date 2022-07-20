import { MongooseOperation } from '../utils/types/mongooseOperation';
import { Performable } from './performable';
import { Query } from './query';
import { QueryModifier } from './queryModifier';

/**
 * An operation that can be performed on a MongoDB collection.
 */
export interface Operation<Document> extends Performable<Document> {
  mongooseOperation: MongooseOperation;
  modifier<Output>(input: QueryModifier<Operation<Document>, Query<Output>>): Query<Output>;
}
