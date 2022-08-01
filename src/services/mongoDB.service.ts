import { Injectable } from '@nestjs/common';
import { connect, ConnectOptions } from 'mongoose';
import { Performable } from '../interfaces/performable';
import { Database } from './database.service';

/**
 * The MongoDB database that can perform queries.
 */
@Injectable()
export class MongoDB implements Database {
  /**
   * Connect to the MongoDB database.
   * @param url
   * The URL of the MongoDB database.
   * @param options
   * The options to use when connecting to the database.
   */
  public async connect(url: string, options: ConnectOptions = {}): Promise<void> {
    connect(url);
    await connect(url, options);
  }

  /**
   * Perform a query on the MongoDB database.
   * @param query
   * The query to perform.
   * @returns
   * The result of the query.
   */
  public async perform<Output>(query: Performable<Output>): Promise<Output> {
    return await query.databaseQuery;
  }
}
