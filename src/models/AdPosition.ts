import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AdPosition
 */
export class AdPosition {
  /**
   * @type {number}
   * @memberof AdPosition
   */
  public position?: number;

  /**
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

