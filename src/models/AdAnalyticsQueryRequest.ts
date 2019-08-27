import {map} from '../common/Mapper';
import AdAnalyticsAbstractFilter from './AdAnalyticsAbstractFilter';
import AdAnalyticsAttribute from './AdAnalyticsAttribute';
import AdAnalyticsOrderByEntry from './AdAnalyticsOrderByEntry';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsQueryTimeframe from './AnalyticsQueryTimeframe';

/**
 * @export
 * @class AdAnalyticsQueryRequest
 */
export class AdAnalyticsQueryRequest extends AnalyticsQueryTimeframe {
  /**
   * Analytics license key (required)
   * @type {string}
   * @memberof AdAnalyticsQueryRequest
   */
  public licenseKey?: string;

  /**
   * @type {AdAnalyticsAbstractFilter[]}
   * @memberof AdAnalyticsQueryRequest
   */
  public filters?: AdAnalyticsAbstractFilter[];

  /**
   * @type {AdAnalyticsOrderByEntry[]}
   * @memberof AdAnalyticsQueryRequest
   */
  public orderBy?: AdAnalyticsOrderByEntry[];

  /**
   * @type {AdAnalyticsAttribute}
   * @memberof AdAnalyticsQueryRequest
   */
  public dimension?: AdAnalyticsAttribute;

  /**
   * @type {AnalyticsInterval}
   * @memberof AdAnalyticsQueryRequest
   */
  public interval?: AnalyticsInterval;

  /**
   * @type {AdAnalyticsAttribute[]}
   * @memberof AdAnalyticsQueryRequest
   */
  public groupBy?: AdAnalyticsAttribute[];

  /**
   * Maximum number of rows returned (max. 200)
   * @type {number}
   * @memberof AdAnalyticsQueryRequest
   */
  public limit?: number;

  /**
   * Offset of data
   * @type {number}
   * @memberof AdAnalyticsQueryRequest
   */
  public offset?: number;

  constructor(obj: Partial<AdAnalyticsQueryRequest>) {
    super(obj);

    this.licenseKey = obj.licenseKey;
    this.filters = map<AdAnalyticsAbstractFilter>(obj.filters, AdAnalyticsAbstractFilter) || [];
    this.orderBy = map<AdAnalyticsOrderByEntry>(obj.orderBy, AdAnalyticsOrderByEntry) || [];
    this.dimension = obj.dimension;
    this.interval = obj.interval;
    this.groupBy = obj.groupBy || [];
    this.limit = obj.limit;
    this.offset = obj.offset;
  }
}

export default AdAnalyticsQueryRequest;

