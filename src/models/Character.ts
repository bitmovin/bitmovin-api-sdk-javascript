import {map, mapArray} from '../common/Mapper';
import CharacterAppearance from './CharacterAppearance';

/**
 * @export
 * @class Character
 */
export class Character {
  /**
   * @type {CharacterAppearance}
   * @memberof Character
   */
  public characterAppearance?: CharacterAppearance;

  /**
   * @type {string}
   * @memberof Character
   */
  public name?: string;

  /**
   * @type {string}
   * @memberof Character
   */
  public playedBy?: string;

  /**
   * @type {string}
   * @memberof Character
   */
  public description?: string;

  constructor(obj?: Partial<Character>) {
    if(!obj) {
      return;
    }
    this.characterAppearance = map(obj.characterAppearance, CharacterAppearance);
    this.name = map(obj.name);
    this.playedBy = map(obj.playedBy);
    this.description = map(obj.description);
  }
}

export default Character;

