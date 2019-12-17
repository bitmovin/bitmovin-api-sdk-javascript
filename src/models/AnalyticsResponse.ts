import {map, mapArray} from '../common/Mapper';
import AnalyticsColumnLabel from './AnalyticsColumnLabel';
import AnalyticsContextDescription from './AnalyticsContextDescription';

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

  /**
   * @type {AnalyticsContextDescription[]}
   * @memberof AnalyticsResponse
   */
  public contextDescription?: AnalyticsContextDescription[];

  constructor(obj?: Partial<AnalyticsResponse>) {
    if(!obj) {
      return;
    }
    this.rows = mapArray(obj.rows);
    this.rowCount = map(obj.rowCount);
    this.columnLabels = mapArray(obj.columnLabels, AnalyticsColumnLabel);
    this.contextDescription = mapArray(obj.contextDescription, AnalyticsContextDescription);
  }
}

export default AnalyticsResponse;

