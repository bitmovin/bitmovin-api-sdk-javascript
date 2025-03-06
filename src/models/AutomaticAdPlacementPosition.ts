import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AutomaticAdPlacementPosition
 */
export class AutomaticAdPlacementPosition {
  /**
   * Position of the ad placement in seconds.
   * @type {number}
   * @memberof AutomaticAdPlacementPosition
   */
  public position?: number;

  /**
   * Maximum deviation in seconds to the ad placement position.
   * @type {number}
   * @memberof AutomaticAdPlacementPosition
   */
  public maxDeviation?: number;

  /**
   * The desired duration in seconds of the ad to be inserted.
   * @type {number}
   * @memberof AutomaticAdPlacementPosition
   */
  public duration?: number;

  constructor(obj?: Partial<AutomaticAdPlacementPosition>) {
    if(!obj) {
      return;
    }
    this.position = map(obj.position);
    this.maxDeviation = map(obj.maxDeviation);
    this.duration = map(obj.duration);
  }
}

export default AutomaticAdPlacementPosition;

