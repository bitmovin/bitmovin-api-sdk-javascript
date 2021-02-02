import {map, mapArray} from '../common/Mapper';
import BillableEncodingMinutesDetails from './BillableEncodingMinutesDetails';
import CodecConfigType from './CodecConfigType';
import EncodingMode from './EncodingMode';
import NexGuardABWatermarkingFeature from './NexGuardABWatermarkingFeature';
import PsnrPerStreamMode from './PsnrPerStreamMode';
import StatisticsPerTitleStream from './StatisticsPerTitleStream';

/**
 * @export
 * @class BillableEncodingMinutes
 */
export class BillableEncodingMinutes {
  /**
   * @type {EncodingMode}
   * @memberof BillableEncodingMinutes
   */
  public encodingMode?: EncodingMode;

  /**
   * @type {CodecConfigType}
   * @memberof BillableEncodingMinutes
   */
  public codec?: CodecConfigType;

  /**
   * @type {StatisticsPerTitleStream}
   * @memberof BillableEncodingMinutes
   */
  public perTitleResultStream?: StatisticsPerTitleStream;

  /**
   * @type {PsnrPerStreamMode}
   * @memberof BillableEncodingMinutes
   */
  public psnrMode?: PsnrPerStreamMode;

  /**
   * Name of the preset configuration used for the codec configuration or \"CUSTOM\" if any preset values were overridden
   * @type {string}
   * @memberof BillableEncodingMinutes
   */
  public preset?: string;

  /**
   * Indicates if the stream was part of a live encoding.
   * @type {boolean}
   * @memberof BillableEncodingMinutes
   */
  public live?: boolean;

  /**
   * Indicates if an enhanced interlace filter was used.
   * @type {boolean}
   * @memberof BillableEncodingMinutes
   */
  public enhancedDeinterlace?: boolean;

  /**
   * @type {NexGuardABWatermarkingFeature}
   * @memberof BillableEncodingMinutes
   */
  public nexGuardABWatermarkingType?: NexGuardABWatermarkingFeature;

  /**
   * @type {BillableEncodingMinutesDetails}
   * @memberof BillableEncodingMinutes
   */
  public billableMinutes?: BillableEncodingMinutesDetails;

  constructor(obj?: Partial<BillableEncodingMinutes>) {
    if(!obj) {
      return;
    }
    this.encodingMode = map(obj.encodingMode);
    this.codec = map(obj.codec);
    this.perTitleResultStream = map(obj.perTitleResultStream);
    this.psnrMode = map(obj.psnrMode);
    this.preset = map(obj.preset);
    this.live = map(obj.live);
    this.enhancedDeinterlace = map(obj.enhancedDeinterlace);
    this.nexGuardABWatermarkingType = map(obj.nexGuardABWatermarkingType);
    this.billableMinutes = map(obj.billableMinutes, BillableEncodingMinutesDetails);
  }
}

export default BillableEncodingMinutes;

