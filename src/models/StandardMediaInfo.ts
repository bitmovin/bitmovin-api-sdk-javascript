import {map} from '../common/Mapper';
import SegmentsMediaInfo from './SegmentsMediaInfo';

/**
 * @export
 * @class StandardMediaInfo
 */
export class StandardMediaInfo extends SegmentsMediaInfo {
  constructor(obj: any) {
    super(obj);
    this.uri = map(obj.uri);
  }

  /**
   * The URI of the Rendition (required)
   * @type {string}
   * @memberof StandardMediaInfo
   */
  public uri: string;
}

export default StandardMediaInfo;

