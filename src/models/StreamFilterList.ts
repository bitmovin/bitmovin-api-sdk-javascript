import {map} from '../common/Mapper';
import StreamFilter from './StreamFilter';

/**
 * @export
 * @class StreamFilterList
 */
export class StreamFilterList {
  constructor(obj: any) {
    this.filters = map<StreamFilter>(obj.filters, StreamFilter);
  }

  /**
   * List of stream filters (required)
   * @type {Array<StreamFilter>}
   * @memberof StreamFilterList
   */
  public filters: Array<StreamFilter>;
}

export default StreamFilterList;

