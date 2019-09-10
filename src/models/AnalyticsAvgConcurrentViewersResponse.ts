import {map, mapArray} from '../common/Mapper';
import AnalyticsColumnLabel from './AnalyticsColumnLabel';

/**
 * @export
 * @class AnalyticsAvgConcurrentViewersResponse
 */
export class AnalyticsAvgConcurrentViewersResponse {
  /**
   * @type {number[]}
   * @memberof AnalyticsAvgConcurrentViewersResponse
   */
  public rows?: number[];

  /**
   * Number of rows returned
   * @type {number}
   * @memberof AnalyticsAvgConcurrentViewersResponse
   */
  public rowCount?: number;

  /**
   * @type {AnalyticsColumnLabel[]}
   * @memberof AnalyticsAvgConcurrentViewersResponse
   */
  public columnLabels?: AnalyticsColumnLabel[];

  constructor(obj?: Partial<AnalyticsAvgConcurrentViewersResponse>) {
    if(!obj) {
      return;
    }
    this.rows = mapArray(obj.rows);
    this.rowCount = map(obj.rowCount);
    this.columnLabels = mapArray(obj.columnLabels, AnalyticsColumnLabel);
  }
}

export default AnalyticsAvgConcurrentViewersResponse;

