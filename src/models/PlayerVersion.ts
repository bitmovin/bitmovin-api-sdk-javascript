import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class PlayerVersion
 */
export class PlayerVersion extends BitmovinResponse {
  /**
   * Version of the Player (required)
   * @type {string}
   * @memberof PlayerVersion
   */
  public version?: string;

  /**
   * URL of the specified player (required)
   * @type {string}
   * @memberof PlayerVersion
   */
  public cdnUrl?: string;

  /**
   * Download URL of the specified player package (required)
   * @type {string}
   * @memberof PlayerVersion
   */
  public downloadUrl?: string;

  /**
   * Creation timestamp formatted in UTC: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof PlayerVersion
   */
  public createdAt?: Date;

  constructor(obj?: Partial<PlayerVersion>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.version = map(obj.version);
    this.cdnUrl = map(obj.cdnUrl);
    this.downloadUrl = map(obj.downloadUrl);
    this.createdAt = map(obj.createdAt, Date);
  }
}

export default PlayerVersion;

