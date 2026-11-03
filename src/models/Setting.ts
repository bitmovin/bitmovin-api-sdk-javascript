import {map, mapArray} from '../common/Mapper';
import Atmosphere from './Atmosphere';
import Location from './Location';

/**
 * @export
 * @class Setting
 */
export class Setting {
  /**
   * Location of the scene.
   * @type {Location}
   * @memberof Setting
   */
  public location?: Location;

  /**
   * Time of day described by the analysis, in free text rather than a fixed vocabulary.
   * @type {string}
   * @memberof Setting
   */
  public timeOfDay?: string;

  /**
   * Description of the setting's atmosphere.
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

