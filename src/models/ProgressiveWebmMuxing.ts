import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import ProgressiveWebmMuxingManifestType from './ProgressiveWebmMuxingManifestType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ProgressiveWebmMuxing
 */
export class ProgressiveWebmMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof ProgressiveWebmMuxing
   */
  public readonly type: MuxingType = MuxingType.PROGRESSIVE_WEBM;

  /**
   * Name of the new Video
   * @type {string}
   * @memberof ProgressiveWebmMuxing
   */
  public filename?: string;

  /**
   * @type {ProgressiveWebmMuxingManifestType}
   * @memberof ProgressiveWebmMuxing
   */
  public manifestType?: ProgressiveWebmMuxingManifestType;

  /**
   * Determines the length of segments in seconds if manifestType is set to DASH_ON_DEMAND. Defaults to 4 seconds
   * @type {number}
   * @memberof ProgressiveWebmMuxing
   */
  public segmentLength?: number;

  constructor(obj?: Partial<ProgressiveWebmMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
    this.manifestType = map(obj.manifestType);
    this.segmentLength = map(obj.segmentLength);
  }
}

export default ProgressiveWebmMuxing;

