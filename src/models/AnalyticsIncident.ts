import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AnalyticsIncident
 */
export class AnalyticsIncident {
  /**
   * Incident id
   * @type {string}
   * @memberof AnalyticsIncident
   */
  public id?: string;

  /**
   * Rule Id
   * @type {string}
   * @memberof AnalyticsIncident
   */
  public ruleId?: string;

  /**
   * Start date of the incident
   * @type {string}
   * @memberof AnalyticsIncident
   */
  public start?: string;

  /**
   * End date of the incident
   * @type {string}
   * @memberof AnalyticsIncident
   */
  public end?: string;

  /**
   * Recovery state of incident
   * @type {boolean}
   * @memberof AnalyticsIncident
   */
  public isRecovered?: boolean;

  constructor(obj?: Partial<AnalyticsIncident>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.ruleId = map(obj.ruleId);
    this.start = map(obj.start);
    this.end = map(obj.end);
    this.isRecovered = map(obj.isRecovered);
  }
}

export default AnalyticsIncident;

