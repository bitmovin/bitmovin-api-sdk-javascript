import {map} from '../common/Mapper';
import BasicMediaInfo from './BasicMediaInfo';

/**
 * @export
 * @class VttMediaInfo
 */
export class VttMediaInfo extends BasicMediaInfo {
  constructor(obj: any) {
    super(obj);
    this.vttUrl = map(obj.vttUrl);
    this.uri = map(obj.uri);
    this.forced = map(obj.forced);
  }

  /**
   * The URL of the referenced VTT file
   * @type {string}
   * @memberof VttMediaInfo
   */
  public vttUrl: string;
  /**
   * The URI of the Rendition
   * @type {string}
   * @memberof VttMediaInfo
   */
  public uri: string;
  /**
   * A value of true indicates that the Rendition contains content which is considered essential to play.
   * @type {boolean}
   * @memberof VttMediaInfo
   */
  public forced?: boolean;
}

export default VttMediaInfo;

