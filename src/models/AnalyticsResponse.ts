import {map} from '../common/Mapper';
import AnalyticsColumnLabel from './AnalyticsColumnLabel';

/**
 * @export
 * @class AnalyticsResponse
 */
export class AnalyticsResponse {
  /**
   * @type {any[]}
   * @memberof AnalyticsResponse
   */
  public rows?: any[];

  /**
   * Number of rows returned
   * @type {number}
   * @memberof AnalyticsResponse
   */
  public rowCount?: number;

  /**
   * @type {AnalyticsColumnLabel[]}
   * @memberof AnalyticsResponse
   */
  public columnLabels?: AnalyticsColumnLabel[];

  constructor(obj: Partial<AnalyticsResponse>) {
    this.rows = map(obj.rows);
    this.rowCount = map(obj.rowCount);
    this.columnLabels = map<AnalyticsColumnLabel>(obj.columnLabels, AnalyticsColumnLabel);
  }
}

export default AnalyticsResponse;

