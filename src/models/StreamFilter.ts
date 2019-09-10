import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class StreamFilter
 */
export class StreamFilter {
  /**
   * The id of the filter that should be used in the stream (required)
   * @type {string}
   * @memberof StreamFilter
   */
  public id?: string;

  /**
   * Defines the order in which filters are applied. Filters are applied in ascending order. (required)
   * @type {number}
   * @memberof StreamFilter
   */
  public position?: number;

  constructor(obj?: Partial<StreamFilter>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.position = map(obj.position);
  }
}

export default StreamFilter;

