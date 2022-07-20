import { MongooseQuery } from '../utils/types/mongooseQuery';
import { Performable } from './performable';
import { QueryModifier } from './queryModifier';

/**
 * A query that can be performed on a MongoDB collection.
 */
export interface Query<Document> extends Performable<Document> {
  mongooseQuery: MongooseQuery;
  modifier<Output>(input: QueryModifier<Query<Document>, Query<Output>>): Query<Output>;
}
