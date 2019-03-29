import {map} from '../common/Mapper';

/**
 * @export
 * @class StreamFilter
 */
export default class StreamFilter {
  constructor(obj: any) {
    this.id = map(obj.id);
    this.position = map(obj.position);
  }

  /**
   * The id of the filter that should be used in the stream
   * @type {string}
   * @memberof StreamFilter
   */
  public id: string;
  /**
   * Defines the order in which filters are applied. Filters are applied in ascending order.
   * @type {number}
   * @memberof StreamFilter
   */
  public position: number;
}
