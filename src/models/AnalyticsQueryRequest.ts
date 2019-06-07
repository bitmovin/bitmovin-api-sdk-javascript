import {map} from '../common/Mapper';
import AnalyticsFilter from './AnalyticsFilter';
import AnalyticsInterval from './AnalyticsInterval';
import AnalyticsOrderByEntry from './AnalyticsOrderByEntry';
import AnalyticsQueryTimeframe from './AnalyticsQueryTimeframe';

/**
 * @export
 * @class AnalyticsQueryRequest
 */
export class AnalyticsQueryRequest extends AnalyticsQueryTimeframe {
  constructor(obj: any) {
    super(obj);
    this.licenseKey = map(obj.licenseKey);
    this.filters = map<AnalyticsFilter>(obj.filters, AnalyticsFilter);
    this.orderBy = map<AnalyticsOrderByEntry>(obj.orderBy, AnalyticsOrderByEntry);
    this.dimension = map(obj.dimension);
    this.interval = map(obj.interval);
    this.groupBy = map(obj.groupBy);
    this.limit = map(obj.limit);
    this.offset = map(obj.offset);
  }

  /**
   * Analytics license key
   * @type {string}
   * @memberof AnalyticsQueryRequest
   */
  public licenseKey: string;
  /**
   * @type {Array<AnalyticsFilter>}
   * @memberof AnalyticsQueryRequest
   */
  public filters?: Array<AnalyticsFilter>;
  /**
   * @type {Array<AnalyticsOrderByEntry>}
   * @memberof AnalyticsQueryRequest
   */
  public orderBy?: Array<AnalyticsOrderByEntry>;
  /**
   * @type {string}
   * @memberof AnalyticsQueryRequest
   */
  public dimension: string;
  /**
   * @type {AnalyticsInterval}
   * @memberof AnalyticsQueryRequest
   */
  public interval?: AnalyticsInterval;
  /**
   * @type {Array<string>}
   * @memberof AnalyticsQueryRequest
   */
  public groupBy?: Array<string>;
  /**
   * Maximum number of rows returned (max. 200)
   * @type {number}
   * @memberof AnalyticsQueryRequest
   */
  public limit?: number;
  /**
   * Offset of data
   * @type {number}
   * @memberof AnalyticsQueryRequest
   */
  public offset?: number;
}

export default AnalyticsQueryRequest;

