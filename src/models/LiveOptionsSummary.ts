import {map, mapArray} from '../common/Mapper';
import LiveOptionsEntry from './LiveOptionsEntry';

/**
 * @export
 * @class LiveOptionsSummary
 */
export class LiveOptionsSummary {
  /**
   * @type {LiveOptionsEntry}
   * @memberof LiveOptionsSummary
   */
  public hd?: LiveOptionsEntry;

  constructor(obj?: Partial<LiveOptionsSummary>) {
    if(!obj) {
      return;
    }
    this.hd = map(obj.hd, LiveOptionsEntry);
  }
}

export default LiveOptionsSummary;

