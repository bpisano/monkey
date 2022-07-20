import { Performable } from '../interfaces/performable';

/**
 * An interface representing database teh can perform queries.
 */
export interface Database {
  perform<Output>(query: Performable<Output>): Promise<Output>;
}
