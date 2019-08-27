import {map} from '../common/Mapper';

/**
 * @export
 * @class BillableEncodingFeatureMinutes
 */
export class BillableEncodingFeatureMinutes {
  /**
   * The name of the feature.
   * @type {string}
   * @memberof BillableEncodingFeatureMinutes
   */
  public featureType?: string;

  /**
   * Encoded minutes related to this feature.
   * @type {number}
   * @memberof BillableEncodingFeatureMinutes
   */
  public encodedMinutes?: number;

  /**
   * The multiplier used for this feature.
   * @type {number}
   * @memberof BillableEncodingFeatureMinutes
   */
  public featureMultiplier?: number;

  /**
   * The billable minutes related to this feature.
   * @type {number}
   * @memberof BillableEncodingFeatureMinutes
   */
  public billableMinutes?: number;

  constructor(obj: Partial<BillableEncodingFeatureMinutes>) {

    this.featureType = obj.featureType;
    this.encodedMinutes = obj.encodedMinutes;
    this.featureMultiplier = obj.featureMultiplier;
    this.billableMinutes = obj.billableMinutes;
  }
}

export default BillableEncodingFeatureMinutes;

