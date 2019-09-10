import {map, mapArray} from '../common/Mapper';

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

  constructor(obj?: Partial<BillableEncodingFeatureMinutes>) {
    if(!obj) {
      return;
    }
    this.featureType = map(obj.featureType);
    this.encodedMinutes = map(obj.encodedMinutes);
    this.featureMultiplier = map(obj.featureMultiplier);
    this.billableMinutes = map(obj.billableMinutes);
  }
}

export default BillableEncodingFeatureMinutes;

