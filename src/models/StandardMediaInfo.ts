import {map, mapArray} from '../common/Mapper';
import SegmentsMediaInfo from './SegmentsMediaInfo';

/**
 * @export
 * @class StandardMediaInfo
 */
export class StandardMediaInfo extends SegmentsMediaInfo {
  /**
   * The URI of the Rendition (required)
   * @type {string}
   * @memberof StandardMediaInfo
   */
  public uri?: string;

  constructor(obj?: Partial<StandardMediaInfo>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.uri = map(obj.uri);
  }
}

export default StandardMediaInfo;

