import {map, mapArray} from '../common/Mapper';
import LiveOptionsBreakdownEntry from './LiveOptionsBreakdownEntry';
import LiveOptionsSummary from './LiveOptionsSummary';

/**
 * @export
 * @class LiveOptionsStatistics
 */
export class LiveOptionsStatistics {
  /**
   * @type {LiveOptionsSummary}
   * @memberof LiveOptionsStatistics
   */
  public summary?: LiveOptionsSummary;

  /**
   * Live options statistics aggregated per day (required)
   * @type {LiveOptionsBreakdownEntry[]}
   * @memberof LiveOptionsStatistics
   */
  public breakdown?: LiveOptionsBreakdownEntry[];

  constructor(obj?: Partial<LiveOptionsStatistics>) {
    if(!obj) {
      return;
    }
    this.summary = map(obj.summary, LiveOptionsSummary);
    this.breakdown = mapArray(obj.breakdown, LiveOptionsBreakdownEntry);
  }
}

export default LiveOptionsStatistics;

