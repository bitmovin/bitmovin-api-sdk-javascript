import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import NexGuardWatermarkingStrength from './NexGuardWatermarkingStrength';
import NexGuardWatermarkingType from './NexGuardWatermarkingType';

/**
 * @export
 * @class NexGuardFileMarker
 */
export class NexGuardFileMarker extends BitmovinResource {
  /**
   * Use the base64 license string that Nagra provides you. (required)
   * @type {string}
   * @memberof NexGuardFileMarker
   */
  public license?: string;

  /**
   * The type of watermarking to be used. Usually, OTT is the one recommended in production.
   * @type {NexGuardWatermarkingType}
   * @memberof NexGuardFileMarker
   */
  public watermarkType?: NexGuardWatermarkingType;

  /**
   * Specify the payload ID that you want to be associated with this output. Valid values vary depending on your Nagra NexGuard forensic watermarking workflow. For PreRelease Content (NGPR), specify an integer from 1 through 4,194,303. You must generate a unique ID for each asset you watermark, and keep a record of th ID. Neither Nagra nor Bitmovin keep track of this for you.
   * @type {number}
   * @memberof NexGuardFileMarker
   */
  public payload?: number;

  /**
   * Enter one of the watermarking preset strings that Nagra provides you.
   * @type {string}
   * @memberof NexGuardFileMarker
   */
  public preset?: string;

  /**
   * Optional. Ignore this setting unless Nagra support directs you to specify a value. When you don't specify a value here, the Nagra NexGuard library uses its default value.
   * @type {NexGuardWatermarkingStrength}
   * @memberof NexGuardFileMarker
   */
  public strength?: NexGuardWatermarkingStrength;

  constructor(obj?: Partial<NexGuardFileMarker>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.license = map(obj.license);
    this.watermarkType = map(obj.watermarkType);
    this.payload = map(obj.payload);
    this.preset = map(obj.preset);
    this.strength = map(obj.strength);
  }
}

export default NexGuardFileMarker;

