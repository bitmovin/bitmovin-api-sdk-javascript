import {map} from '../common/Mapper';
import BillableEncodingFeatureMinutes from './BillableEncodingFeatureMinutes';
import BillableEncodingMinutes from './BillableEncodingMinutes';
import Statistics from './Statistics';

/**
 * @export
 * @class StatisticsPerLabel
 */
export default class StatisticsPerLabel extends Statistics {
  constructor(obj: any) {
    super(obj);
    this.label = map(obj.label);
    this.billableMinutes = map(obj.billableMinutes);
    this.billableEncodingMinutes = map<BillableEncodingMinutes>(obj.billableEncodingMinutes, BillableEncodingMinutes);
    this.billableTransmuxingMinutes = map(obj.billableTransmuxingMinutes);
    this.billableFeatureMinutes = map<BillableEncodingFeatureMinutes>(obj.billableFeatureMinutes, BillableEncodingFeatureMinutes);
  }

  /**
   * An optional error message, when the event is in error state (occurs at event: ERROR)
   * @type {string}
   * @memberof StatisticsPerLabel
   */
  public label: string;
  /**
   * The billable minutes.
   * @type {number}
   * @memberof StatisticsPerLabel
   */
  public billableMinutes?: number;
  /**
   * Billable minutes for each encoding configuration
   * @type {Array<BillableEncodingMinutes>}
   * @memberof StatisticsPerLabel
   */
  public billableEncodingMinutes?: Array<BillableEncodingMinutes>;
  /**
   * Billable minutes for muxings.
   * @type {number}
   * @memberof StatisticsPerLabel
   */
  public billableTransmuxingMinutes?: number;
  /**
   * Billable minutes for features
   * @type {Array<BillableEncodingFeatureMinutes>}
   * @memberof StatisticsPerLabel
   */
  public billableFeatureMinutes?: Array<BillableEncodingFeatureMinutes>;
}
