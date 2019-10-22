import {map, mapArray} from '../common/Mapper';
import PaddingDurationUnit from './PaddingDurationUnit';

/**
 * @export
 * @class PaddingSequence
 */
export class PaddingSequence {
  /**
   * Duration of the padding sequence, given in the unit specified by the `unit` property. The maximum duration is 300 frames or 10 seconds. If the unit is `FRAMES`, this needs to be an integer value and will be interpreted based on the input frame rate of the main part of the ConcatenationInputStream that is used by your video output stream(s). `FRAMES` is not allowed if the encoding does not contain a video output stream. (required)
   * @type {number}
   * @memberof PaddingSequence
   */
  public duration?: number;

  /**
   * The unit of the `duration` property
   * @type {PaddingDurationUnit}
   * @memberof PaddingSequence
   */
  public unit?: PaddingDurationUnit;

  constructor(obj?: Partial<PaddingSequence>) {
    if(!obj) {
      return;
    }
    this.duration = map(obj.duration);
    this.unit = map(obj.unit);
  }
}

export default PaddingSequence;

