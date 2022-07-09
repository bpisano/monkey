import { Performable } from "../interfaces/performable";

export interface Database {
  perform<Output>(query: Performable<Output>): Promise<Output>;
}
