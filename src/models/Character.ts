import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Character
 */
export class Character {
  /**
   * @type {string}
   * @memberof Character
   */
  public appearance?: string;

  /**
   * @type {string}
   * @memberof Character
   */
  public name?: string;

  /**
   * @type {string}
   * @memberof Character
   */
  public description?: string;

  constructor(obj?: Partial<Character>) {
    if(!obj) {
      return;
    }
    this.appearance = map(obj.appearance);
    this.name = map(obj.name);
    this.description = map(obj.description);
  }
}

export default Character;

