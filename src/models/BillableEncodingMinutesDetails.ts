import {map} from '../common/Mapper';

/**
 * @export
 * @class BillableEncodingMinutesDetails
 */
export class BillableEncodingMinutesDetails {
  /**
   * Only set if resolution information is not present.
   * @type {number}
   * @memberof BillableEncodingMinutesDetails
   */
  public UNKNOWN?: number;

  /**
   * Billable minutes for audio. Available if stream is an audio stream.
   * @type {number}
   * @memberof BillableEncodingMinutesDetails
   */
  public AUDIO?: number;

  /**
   * Billable minutes for SD resolutions.
   * @type {number}
   * @memberof BillableEncodingMinutesDetails
   */
  public SD?: number;

  /**
   * Billable minutes for HD resolutions.
   * @type {number}
   * @memberof BillableEncodingMinutesDetails
   */
  public HD?: number;

  /**
   * Billable minutes for UHD resolutions.
   * @type {number}
   * @memberof BillableEncodingMinutesDetails
   */
  public UHD?: number;

  constructor(obj: Partial<BillableEncodingMinutesDetails>) {
    this.UNKNOWN = map(obj.UNKNOWN);
    this.AUDIO = map(obj.AUDIO);
    this.SD = map(obj.SD);
    this.HD = map(obj.HD);
    this.UHD = map(obj.UHD);
  }
}

export default BillableEncodingMinutesDetails;

