import {map, mapArray} from '../common/Mapper';
import AnalyticsAbstractFilter from './AnalyticsAbstractFilter';
import AnalyticsQueryTimeframe from './AnalyticsQueryTimeframe';

/**
 * @export
 * @class AnalyticsImpressionsQuery
 */
export class AnalyticsImpressionsQuery extends AnalyticsQueryTimeframe {
  /**
   * Analytics license key
   * @type {string}
   * @memberof AnalyticsImpressionsQuery
   */
  public licenseKey?: string;

  /**
   * @type {AnalyticsAbstractFilter[]}
   * @memberof AnalyticsImpressionsQuery
   */
  public filters?: AnalyticsAbstractFilter[];

  /**
   * Number of returned impressions
   * @type {number}
   * @memberof AnalyticsImpressionsQuery
   */
  public limit?: number;

  constructor(obj?: Partial<AnalyticsImpressionsQuery>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.licenseKey = map(obj.licenseKey);
    this.filters = mapArray(obj.filters, AnalyticsAbstractFilter);
    this.limit = map(obj.limit);
  }
}

export default AnalyticsImpressionsQuery;

