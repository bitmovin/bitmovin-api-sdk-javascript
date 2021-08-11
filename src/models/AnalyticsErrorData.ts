import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsErrorData
 */
export class AnalyticsErrorData {
  /**
   * Exception message
   * @type {string}
   * @memberof AnalyticsErrorData
   */
  public exceptionMessage?: string;

  /**
   * Additional error data
   * @type {string}
   * @memberof AnalyticsErrorData
   */
  public additionalData?: string;

  /**
   * @type {string[]}
   * @memberof AnalyticsErrorData
   */
  public exceptionStacktrace?: string[];

  constructor(obj?: Partial<AnalyticsErrorData>) {
    if(!obj) {
      return;
    }
    this.exceptionMessage = map(obj.exceptionMessage);
    this.additionalData = map(obj.additionalData);
    this.exceptionStacktrace = mapArray(obj.exceptionStacktrace);
  }
}

export default AnalyticsErrorData;

