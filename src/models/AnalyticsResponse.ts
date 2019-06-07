import {map} from '../common/Mapper';
import AnalyticsColumnLabel from './AnalyticsColumnLabel';

/**
 * @export
 * @class AnalyticsResponse
 */
export class AnalyticsResponse {
  constructor(obj: any) {
    this.rows = map(obj.rows);
    this.rowCount = map(obj.rowCount);
    this.columnLabels = map<AnalyticsColumnLabel>(obj.columnLabels, AnalyticsColumnLabel);
  }

  /**
   * @type {Array<any>}
   * @memberof AnalyticsResponse
   */
  public rows?: Array<any>;
  /**
   * Number of rows returned
   * @type {number}
   * @memberof AnalyticsResponse
   */
  public rowCount?: number;
  /**
   * @type {Array<AnalyticsColumnLabel>}
   * @memberof AnalyticsResponse
   */
  public columnLabels?: Array<AnalyticsColumnLabel>;
}

export default AnalyticsResponse;

