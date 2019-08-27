import {map} from '../common/Mapper';
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

  constructor(obj: Partial<BitmovinResource>) {
    super(obj);

    this.name = obj.name;
    this.description = obj.description;
    this.createdAt = map<Date>(obj.createdAt, Date);
    this.modifiedAt = map<Date>(obj.modifiedAt, Date);
    this.customData = obj.customData;
  }
}

export default BitmovinResource;

