import { MongooseOperation } from '../utils/types/mongooseOperation';
import { MongooseQuery } from '../utils/types/mongooseQuery';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Performable<T> {
  databaseQuery: MongooseQuery | MongooseOperation;
}
