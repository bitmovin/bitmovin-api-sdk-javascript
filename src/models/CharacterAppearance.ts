import {map, mapArray} from '../common/Mapper';
import AgeRange from './AgeRange';

/**
 * @export
 * @class CharacterAppearance
 */
export class CharacterAppearance {
  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public summary?: string;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public gender?: string;

  /**
   * The approximate age range of the character
   * @type {AgeRange}
   * @memberof CharacterAppearance
   */
  public approximateAge?: AgeRange;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public hairColor?: string;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public hairStyle?: string;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public hairFullness?: string;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public facialHair?: string;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public physicalBuild?: string;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public distinguishingFeatures?: string;

  /**
   * @type {string}
   * @memberof CharacterAppearance
   */
  public clothing?: string;

  constructor(obj?: Partial<CharacterAppearance>) {
    if(!obj) {
      return;
    }
    this.summary = map(obj.summary);
    this.gender = map(obj.gender);
    this.approximateAge = map(obj.approximateAge);
    this.hairColor = map(obj.hairColor);
    this.hairStyle = map(obj.hairStyle);
    this.hairFullness = map(obj.hairFullness);
    this.facialHair = map(obj.facialHair);
    this.physicalBuild = map(obj.physicalBuild);
    this.distinguishingFeatures = map(obj.distinguishingFeatures);
    this.clothing = map(obj.clothing);
  }
}

export default CharacterAppearance;

