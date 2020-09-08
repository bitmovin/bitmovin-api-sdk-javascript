import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class BitmovinResource
 */
export class BitmovinResource extends BitmovinResponse {
  /**
   * Name of the resource. Can be freely chosen by the user.
   * @type {string}
   * @memberof BitmovinResource
   */
  public name?: string;

  /**
   * Description of the resource. Can be freely chosen by the user.
   * @type {string}
   * @memberof BitmovinResource
   */
  public description?: string;

  /**
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof BitmovinResource
   */
  public createdAt?: Date;

  /**
   * Modified timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof BitmovinResource
   */
  public modifiedAt?: Date;

  /**
   * User-specific meta data. This can hold anything.
   * @type {{ [key: string]: any; }}
   * @memberof BitmovinResource
   */
  public customData?: { [key: string]: any; };

  constructor(obj?: Partial<BitmovinResource>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.description = map(obj.description);
    this.createdAt = map(obj.createdAt, Date);
    this.modifiedAt = map(obj.modifiedAt, Date);
    this.customData = map(obj.customData);
  }
}

export default BitmovinResource;

