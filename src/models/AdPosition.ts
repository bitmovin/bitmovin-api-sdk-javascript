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

  constructor(obj?: Partial<AdPosition>) {
    if(!obj) {
      return;
    }
    this.position = map(obj.position);
  }
}

export default AdPosition;

