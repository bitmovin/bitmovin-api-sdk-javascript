import {map} from '../common/Mapper';
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

  constructor(obj: Partial<PlayerVersion>) {
    super(obj);

    this.version = obj.version;
    this.cdnUrl = obj.cdnUrl;
    this.downloadUrl = obj.downloadUrl;
    this.createdAt = map<Date>(obj.createdAt, Date);
  }
}

export default PlayerVersion;

