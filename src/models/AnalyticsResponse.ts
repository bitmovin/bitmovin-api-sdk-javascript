import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<AnalyticsResponse>) {
    if(!obj) {
      return;
    }
    this.rows = mapArray(obj.rows);
    this.rowCount = map(obj.rowCount);
    this.columnLabels = mapArray(obj.columnLabels, AnalyticsColumnLabel);
  }
}

export default AnalyticsResponse;

