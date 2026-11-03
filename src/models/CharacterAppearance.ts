import {map, mapArray} from '../common/Mapper';
import AgeRange from './AgeRange';

/**
 * Visible appearance of a character. Text fields use an open vocabulary; spelling, case and unknown-value wording can vary.
 * @export
 * @class CharacterAppearance
 */
export class CharacterAppearance {
  /**
   * Summary of the character's visible appearance.
   * @type {string}
   * @memberof CharacterAppearance
   */
  public summary?: string;

  /**
   * Apparent gender, described in free text.
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
   * Hair color.
   * @type {string}
   * @memberof CharacterAppearance
   */
  public hairColor?: string;

  /**
   * Hairstyle.
   * @type {string}
   * @memberof CharacterAppearance
   */
  public hairStyle?: string;

  /**
   * Hair fullness or coverage.
   * @type {string}
   * @memberof CharacterAppearance
   */
  public hairFullness?: string;

  /**
   * Facial hair. Can be empty when no description is available.
   * @type {string}
   * @memberof CharacterAppearance
   */
  public facialHair?: string;

  /**
   * The character's physical build.
   * @type {string}
   * @memberof CharacterAppearance
   */
  public physicalBuild?: string;

  /**
   * Distinctive visible features, such as glasses or markings.
   * @type {string}
   * @memberof CharacterAppearance
   */
  public distinguishingFeatures?: string;

  /**
   * The character's clothing.
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

