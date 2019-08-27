import {map} from '../common/Mapper';
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

  constructor(obj: Partial<AnalyticsAvgDroppedFramesResponse>) {

    this.rows = obj.rows || [];
    this.rowCount = obj.rowCount;
    this.columnLabels = map<AnalyticsColumnLabel>(obj.columnLabels, AnalyticsColumnLabel) || [];
  }
}

export default AnalyticsAvgDroppedFramesResponse;

