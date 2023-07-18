import {map, mapArray} from '../common/Mapper';
import LiveOptionsEntry from './LiveOptionsEntry';

/**
 * @export
 * @class LiveOptionsBreakdownEntry
 */
export class LiveOptionsBreakdownEntry {
  /**
   * Date, format: yyyy-MM-dd (required)
   * @type {Date}
   * @memberof LiveOptionsBreakdownEntry
   */
  public date?: Date;

  /**
   * @type {LiveOptionsEntry}
   * @memberof LiveOptionsBreakdownEntry
   */
  public hd?: LiveOptionsEntry;

  constructor(obj?: Partial<LiveOptionsBreakdownEntry>) {
    if(!obj) {
      return;
    }
    this.date = map(obj.date, Date);
    this.hd = map(obj.hd, LiveOptionsEntry);
  }
}

export default LiveOptionsBreakdownEntry;

