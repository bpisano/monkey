/* eslint-disable @typescript-eslint/no-unused-vars */
import { MongooseOperation } from '../utils/types/mongooseOperation';
import { MongooseQuery } from '../utils/types/mongooseQuery';

/**
 * Any query that can be performed on a MongoDB collection.
 */
export interface Performable<T> {
  databaseQuery: MongooseQuery | MongooseOperation;
}
