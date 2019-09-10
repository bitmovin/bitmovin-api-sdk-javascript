import {map, mapArray} from '../common/Mapper';
import AnalyticsColumnLabel from './AnalyticsColumnLabel';

/**
 * @export
 * @class AnalyticsMaxConcurrentViewersResponse
 */
export class AnalyticsMaxConcurrentViewersResponse {
  /**
   * @type {number[]}
   * @memberof AnalyticsMaxConcurrentViewersResponse
   */
  public rows?: number[];

  /**
   * Number of rows returned
   * @type {number}
   * @memberof AnalyticsMaxConcurrentViewersResponse
   */
  public rowCount?: number;

  /**
   * @type {AnalyticsColumnLabel[]}
   * @memberof AnalyticsMaxConcurrentViewersResponse
   */
  public columnLabels?: AnalyticsColumnLabel[];

  constructor(obj?: Partial<AnalyticsMaxConcurrentViewersResponse>) {
    if(!obj) {
      return;
    }
    this.rows = mapArray(obj.rows);
    this.rowCount = map(obj.rowCount);
    this.columnLabels = mapArray(obj.columnLabels, AnalyticsColumnLabel);
  }
}

export default AnalyticsMaxConcurrentViewersResponse;

