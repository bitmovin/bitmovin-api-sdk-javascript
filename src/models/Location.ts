import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Location
 */
export class Location {
  /**
   * @type {string}
   * @memberof Location
   */
  public name?: string;

  /**
   * @type {string}
   * @memberof Location
   */
  public description?: string;

  constructor(obj?: Partial<Location>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.description = map(obj.description);
  }
}

export default Location;

