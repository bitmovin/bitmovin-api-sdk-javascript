import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class LiveOptionsEntry
 */
export class LiveOptionsEntry {
  /**
   * Live option units used (required)
   * @type {number}
   * @memberof LiveOptionsEntry
   */
  public unitsUsed?: number;

  constructor(obj?: Partial<LiveOptionsEntry>) {
    if(!obj) {
      return;
    }
    this.unitsUsed = map(obj.unitsUsed);
  }
}

export default LiveOptionsEntry;

