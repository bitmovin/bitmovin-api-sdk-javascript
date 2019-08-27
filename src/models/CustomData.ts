import {map} from '../common/Mapper';

/**
 * @export
 * @class CustomData
 */
export class CustomData {
  /**
   * User-specific meta data. This can hold a custom JSON object.
   * @type {{ [key: string]: any; }}
   * @memberof CustomData
   */
  public customData?: { [key: string]: any; };

  /**
   * Creation timestamp formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof CustomData
   */
  public createdAt?: Date;

  constructor(obj: Partial<CustomData>) {

    this.customData = obj.customData;
    this.createdAt = map<Date>(obj.createdAt, Date);
  }
}

export default CustomData;

