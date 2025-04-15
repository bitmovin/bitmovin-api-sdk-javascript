import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Atmosphere
 */
export class Atmosphere {
  /**
   * @type {string}
   * @memberof Atmosphere
   */
  public mood?: string;

  /**
   * @type {string}
   * @memberof Atmosphere
   */
  public lighting?: string;

  /**
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

