import {map} from '../common/Mapper';
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

  constructor(obj: Partial<AnalyticsAvgConcurrentViewersResponse>) {

    this.rows = obj.rows || [];
    this.rowCount = obj.rowCount;
    this.columnLabels = map<AnalyticsColumnLabel>(obj.columnLabels, AnalyticsColumnLabel) || [];
  }
}

export default AnalyticsAvgConcurrentViewersResponse;

