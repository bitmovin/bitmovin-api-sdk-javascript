import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Location
 */
export class Location {
  /**
   * Short descriptive name of the place, which need not identify a real geographic location.
   * @type {string}
   * @memberof Location
   */
  public name?: string;

  /**
   * Free-text description of the place.
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

