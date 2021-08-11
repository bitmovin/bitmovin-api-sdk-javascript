import {map, mapArray} from '../common/Mapper';
import AnalyticsErrorDetail from './AnalyticsErrorDetail';

/**
 * @export
 * @class AnalyticsErrorDetailsResponse
 */
export class AnalyticsErrorDetailsResponse {
  /**
   * @type {AnalyticsErrorDetail[]}
   * @memberof AnalyticsErrorDetailsResponse
   */
  public errorDetails?: AnalyticsErrorDetail[];

  constructor(obj?: Partial<AnalyticsErrorDetailsResponse>) {
    if(!obj) {
      return;
    }
    this.errorDetails = mapArray(obj.errorDetails, AnalyticsErrorDetail);
  }
}

export default AnalyticsErrorDetailsResponse;

