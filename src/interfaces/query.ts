import { MongooseQuery } from '../utils/types/mongooseQuery';
import { Performable } from './performable';
import { QueryModifier } from './queryModifier';

export interface Query<Document> extends Performable<Document> {
  mongooseQuery: MongooseQuery;
  modifier<Output>(input: QueryModifier<Query<Document>, Query<Output>>): Query<Output>;
}
