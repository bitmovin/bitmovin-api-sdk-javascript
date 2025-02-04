import {map, mapArray} from '../common/Mapper';
import ProgramDateTimePlacementMode from './ProgramDateTimePlacementMode';

/**
 * @export
 * @class ProgramDateTimePlacement
 */
export class ProgramDateTimePlacement {
  /**
   * @type {ProgramDateTimePlacementMode}
   * @memberof ProgramDateTimePlacement
   */
  public programDateTimePlacementMode?: ProgramDateTimePlacementMode;

  /**
   * Interval for placing ProgramDateTime. Only required for SEGMENTS_INTERVAL or SECONDS_INTERVAL.
   * @type {number}
   * @memberof ProgramDateTimePlacement
   */
  public interval?: number;

  constructor(obj?: Partial<ProgramDateTimePlacement>) {
    if(!obj) {
      return;
    }
    this.programDateTimePlacementMode = map(obj.programDateTimePlacementMode);
    this.interval = map(obj.interval);
  }
}

export default ProgramDateTimePlacement;

