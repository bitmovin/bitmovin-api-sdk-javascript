import {map, mapArray} from '../common/Mapper';
import BasicMediaInfo from './BasicMediaInfo';

/**
 * @export
 * @class VttMediaInfo
 */
export class VttMediaInfo extends BasicMediaInfo {
  /**
   * The URL of the referenced VTT file (required)
   * @type {string}
   * @memberof VttMediaInfo
   */
  public vttUrl?: string;

  /**
   * The URI of the Rendition (required)
   * @type {string}
   * @memberof VttMediaInfo
   */
  public uri?: string;

  /**
   * A value of true indicates that the Rendition contains content which is considered essential to play.
   * @type {boolean}
   * @memberof VttMediaInfo
   */
  public forced?: boolean;

  constructor(obj?: Partial<VttMediaInfo>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.vttUrl = map(obj.vttUrl);
    this.uri = map(obj.uri);
    this.forced = map(obj.forced);
  }
}

export default VttMediaInfo;

