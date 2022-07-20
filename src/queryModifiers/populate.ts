import { Performable } from '../interfaces/performable';
import { Query } from '../interfaces/query';
import { QueryModifier } from '../interfaces/queryModifier';
import { DBQuery } from '../models/dbQuery';
import { MongooseQuery } from '../utils/types/mongooseQuery';

/**
 * Populate a query's documents.
 */
export class Populate<T> implements QueryModifier<Performable<T>, Query<T>> {
  private constructor(private readonly fields: string[]) {}

  /**
   * Populate the query with the given properties.
   * @param fields
   * The properties to populate.
   * @returns
   * A new Populate instance.
   */
  public static properties<T>(fields: string[]): Populate<T> {
    return new Populate(fields);
  }

  /**
   * Populate the query with the given population object.
   * @param population
   * The population object to populate.
   * @returns
   * A new Populate instance.
   */
  public static with<T>(population: any[]): Populate<T> {
    return new Populate(population);
  }

  public modifier(input: Performable<T>): DBQuery<T> {
    const query: MongooseQuery = input.databaseQuery.populate(this.fields);
    return new DBQuery(query);
  }
}
