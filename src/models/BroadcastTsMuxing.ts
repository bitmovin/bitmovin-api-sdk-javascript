import {map, mapArray} from '../common/Mapper';
import BroadcastTsMuxingConfiguration from './BroadcastTsMuxingConfiguration';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class BroadcastTsMuxing
 */
export class BroadcastTsMuxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof BroadcastTsMuxing
   */
  public readonly type: MuxingType = MuxingType.BROADCAST_TS;

  /**
   * Length of the segments in seconds.
   * @type {number}
   * @memberof BroadcastTsMuxing
   */
  public segmentLength?: number;

  /**
   * Name of the output file
   * @type {string}
   * @memberof BroadcastTsMuxing
   */
  public filename?: string;

  /**
   * @type {BroadcastTsMuxingConfiguration}
   * @memberof BroadcastTsMuxing
   */
  public configuration?: BroadcastTsMuxingConfiguration;

  constructor(obj?: Partial<BroadcastTsMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.filename = map(obj.filename);
    this.configuration = map(obj.configuration, BroadcastTsMuxingConfiguration);
  }
}

export default BroadcastTsMuxing;

