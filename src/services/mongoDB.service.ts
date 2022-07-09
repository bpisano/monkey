import { Database } from './database.service';
import { Performable } from './interfaces/performable';

export class MongoDB implements Database {
  public async perform<Output>(query: Performable<Output>): Promise<Output> {
    return await query.databaseQuery;
  }
}
