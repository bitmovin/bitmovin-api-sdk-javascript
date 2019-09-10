import {map, mapArray} from '../common/Mapper';
import AnalyticsColumnLabel from './AnalyticsColumnLabel';

/**
 * @export
 * @class AnalyticsAvgDroppedFramesResponse
 */
export class AnalyticsAvgDroppedFramesResponse {
  /**
   * @type {number[]}
   * @memberof AnalyticsAvgDroppedFramesResponse
   */
  public rows?: number[];

  /**
   * Number of rows returned
   * @type {number}
   * @memberof AnalyticsAvgDroppedFramesResponse
   */
  public rowCount?: number;

  /**
   * @type {AnalyticsColumnLabel[]}
   * @memberof AnalyticsAvgDroppedFramesResponse
   */
  public columnLabels?: AnalyticsColumnLabel[];

  constructor(obj?: Partial<AnalyticsAvgDroppedFramesResponse>) {
    if(!obj) {
      return;
    }
    this.rows = mapArray(obj.rows);
    this.rowCount = map(obj.rowCount);
    this.columnLabels = mapArray(obj.columnLabels, AnalyticsColumnLabel);
  }
}

export default AnalyticsAvgDroppedFramesResponse;

