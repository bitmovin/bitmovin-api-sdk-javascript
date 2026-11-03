import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Atmosphere
 */
export class Atmosphere {
  /**
   * Mood or tone of the setting, in free text.
   * @type {string}
   * @memberof Atmosphere
   */
  public mood?: string;

  /**
   * Description of the lighting in free text.
   * @type {string}
   * @memberof Atmosphere
   */
  public lighting?: string;

  /**
   * Weather or indoor conditions described by the analysis, in free text.
   * @type {string}
   * @memberof Atmosphere
   */
  public weather?: string;

  constructor(obj?: Partial<Atmosphere>) {
    if(!obj) {
      return;
    }
    this.mood = map(obj.mood);
    this.lighting = map(obj.lighting);
    this.weather = map(obj.weather);
  }
}

export default Atmosphere;

