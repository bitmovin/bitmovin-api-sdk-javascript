import {map, mapArray} from '../common/Mapper';
import StreamFilter from './StreamFilter';

/**
 * @export
 * @class StreamFilterList
 */
export class StreamFilterList {
  /**
   * List of stream filters (required)
   * @type {StreamFilter[]}
   * @memberof StreamFilterList
   */
  public filters?: StreamFilter[];

  constructor(obj?: Partial<StreamFilterList>) {
    if(!obj) {
      return;
    }
    this.filters = mapArray(obj.filters, StreamFilter);
  }
}

export default StreamFilterList;

