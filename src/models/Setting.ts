import {map, mapArray} from '../common/Mapper';
import Atmosphere from './Atmosphere';
import Location from './Location';

/**
 * @export
 * @class Setting
 */
export class Setting {
  /**
   * @type {Location}
   * @memberof Setting
   */
  public location?: Location;

  /**
   * @type {string}
   * @memberof Setting
   */
  public timeOfDay?: string;

  /**
   * @type {Atmosphere}
   * @memberof Setting
   */
  public atmosphere?: Atmosphere;

  constructor(obj?: Partial<Setting>) {
    if(!obj) {
      return;
    }
    this.location = map(obj.location, Location);
    this.timeOfDay = map(obj.timeOfDay);
    this.atmosphere = map(obj.atmosphere, Atmosphere);
  }
}

export default Setting;

