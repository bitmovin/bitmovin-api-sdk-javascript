import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class PlayerVersion
 */
export default class PlayerVersion extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.version = map(obj.version);
    this.cdnUrl = map(obj.cdnUrl);
    this.downloadUrl = map(obj.downloadUrl);
    this.createdAt = map(obj.createdAt);
  }

  /**
   * Version of the Player
   * @type {string}
   * @memberof PlayerVersion
   */
  public version?: string;
  /**
   * URL of the specified player
   * @type {string}
   * @memberof PlayerVersion
   */
  public cdnUrl?: string;
  /**
   * Download URL of the specified player package
   * @type {string}
   * @memberof PlayerVersion
   */
  public downloadUrl?: string;
  /**
   * Creation timestamp formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof PlayerVersion
   */
  public createdAt?: Date;
}
