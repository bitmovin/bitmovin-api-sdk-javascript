import {map, mapArray} from '../common/Mapper';

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
   * Creation timestamp, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof CustomData
   */
  public createdAt?: Date;

  constructor(obj?: Partial<CustomData>) {
    if(!obj) {
      return;
    }
    this.customData = map(obj.customData);
    this.createdAt = map(obj.createdAt, Date);
  }
}

export default CustomData;

