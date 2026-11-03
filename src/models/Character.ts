import {map, mapArray} from '../common/Mapper';
import CharacterAppearance from './CharacterAppearance';

/**
 * @export
 * @class Character
 */
export class Character {
  /**
   * Description of the character's visible appearance.
   * @type {CharacterAppearance}
   * @memberof Character
   */
  public characterAppearance?: CharacterAppearance;

  /**
   * Name assigned to the character when identified. Can be null or an empty string, even when a summary names the person.
   * @type {string}
   * @memberof Character
   */
  public name?: string;

  /**
   * Name of the performer credited for the resolved character role when uniquely matched. Can be null or an empty string when identity or the role-to-performer match is unresolved. Retains its original value in language-specific results.
   * @type {string}
   * @memberof Character
   */
  public playedBy?: string;

  /**
   * Free-text description of the character and their role or actions in this scene.
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

