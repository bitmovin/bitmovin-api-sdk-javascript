import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class BitmovinResource
 */
export class BitmovinResource extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.name = map(obj.name);
    this.description = map(obj.description);
    this.createdAt = map(obj.createdAt, Date);
    this.modifiedAt = map(obj.modifiedAt, Date);
    this.customData = map(obj.customData);
  }

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
   * Creation timestamp formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof BitmovinResource
   */
  public createdAt?: Date;
  /**
   * Modified timestamp formatted in UTC: YYYY-MM-DDThh:mm:ssZ
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
}

export default BitmovinResource;

