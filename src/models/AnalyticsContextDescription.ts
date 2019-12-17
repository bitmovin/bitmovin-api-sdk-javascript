import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsContextDescription
 */
export class AnalyticsContextDescription {
  /**
   * @type {string}
   * @memberof AnalyticsContextDescription
   */
  public label?: string;

  /**
   * @type {string}
   * @memberof AnalyticsContextDescription
   */
  public description?: string;

  constructor(obj?: Partial<AnalyticsContextDescription>) {
    if(!obj) {
      return;
    }
    this.label = map(obj.label);
    this.description = map(obj.description);
  }
}

export default AnalyticsContextDescription;

