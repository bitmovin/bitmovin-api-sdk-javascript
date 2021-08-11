import {map, mapArray} from '../common/Mapper';
import AnalyticsErrorData from './AnalyticsErrorData';
import AnalyticsHttpRequest from './AnalyticsHttpRequest';

/**
 * @export
 * @class AnalyticsErrorDetail
 */
export class AnalyticsErrorDetail {
  /**
   * Error id
   * @type {number}
   * @memberof AnalyticsErrorDetail
   */
  public errorId?: number;

  /**
   * Server timestamp
   * @type {Date}
   * @memberof AnalyticsErrorDetail
   */
  public time?: Date;

  /**
   * Client timestamp
   * @type {Date}
   * @memberof AnalyticsErrorDetail
   */
  public clientTime?: Date;

  /**
   * Error code
   * @type {number}
   * @memberof AnalyticsErrorDetail
   */
  public code?: number;

  /**
   * Error message
   * @type {string}
   * @memberof AnalyticsErrorDetail
   */
  public message?: string;

  /**
   * @type {AnalyticsErrorData}
   * @memberof AnalyticsErrorDetail
   */
  public errorData?: AnalyticsErrorData;

  /**
   * @type {AnalyticsHttpRequest[]}
   * @memberof AnalyticsErrorDetail
   */
  public httpRequests?: AnalyticsHttpRequest[];

  constructor(obj?: Partial<AnalyticsErrorDetail>) {
    if(!obj) {
      return;
    }
    this.errorId = map(obj.errorId);
    this.time = map(obj.time, Date);
    this.clientTime = map(obj.clientTime, Date);
    this.code = map(obj.code);
    this.message = map(obj.message);
    this.errorData = map(obj.errorData, AnalyticsErrorData);
    this.httpRequests = mapArray(obj.httpRequests, AnalyticsHttpRequest);
  }
}

export default AnalyticsErrorDetail;

