import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AdPosition
 */
export class AdPosition {
  /**
   * Selected ad break position in seconds from the beginning of the video.
   * @type {number}
   * @memberof AdPosition
   */
  public position?: number;

  /**
   * Ad duration in seconds requested for this placement. Not set for breaks added at all scene boundaries, when the schedule entry has no duration, or when the encoder does not support ad durations.
   * @type {number}
   * @memberof AdPosition
   */
  public duration?: number;

  constructor(obj?: Partial<AdPosition>) {
    if(!obj) {
      return;
    }
    this.position = map(obj.position);
    this.duration = map(obj.duration);
  }
}

export default AdPosition;

