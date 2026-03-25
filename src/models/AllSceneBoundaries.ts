import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AllSceneBoundaries
 */
export class AllSceneBoundaries {
  /**
   * If true, a keyframe (IDR frame) is placed at every detected scene boundary, enabling clean segment cuts aligned with scene changes. 
   * @type {boolean}
   * @memberof AllSceneBoundaries
   */
  public isEnabled?: boolean;

  /**
   * If true, cue tags are inserted at every scene boundary in addition to keyframes. 
   * @type {boolean}
   * @memberof AllSceneBoundaries
   */
  public insertCueTags?: boolean;

  constructor(obj?: Partial<AllSceneBoundaries>) {
    if(!obj) {
      return;
    }
    this.isEnabled = map(obj.isEnabled);
    this.insertCueTags = map(obj.insertCueTags);
  }
}

export default AllSceneBoundaries;

