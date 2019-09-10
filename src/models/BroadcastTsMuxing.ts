import {map, mapArray} from '../common/Mapper';
import BroadcastTsMuxingConfiguration from './BroadcastTsMuxingConfiguration';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import InternalChunkLength from './InternalChunkLength';
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
  public type: MuxingType.BROADCAST_TS = MuxingType.BROADCAST_TS;

  /**
   * Length of the segments in seconds.
   * @type {number}
   * @memberof BroadcastTsMuxing
   */
  public segmentLength?: number;

  /**
   * Name of the new Video
   * @type {string}
   * @memberof BroadcastTsMuxing
   */
  public filename?: string;

  /**
   * @type {BroadcastTsMuxingConfiguration}
   * @memberof BroadcastTsMuxing
   */
  public configuration?: BroadcastTsMuxingConfiguration;

  /**
   * Modifies the internal chunk length used for chunked encoding
   * @type {InternalChunkLength}
   * @memberof BroadcastTsMuxing
   */
  public internalChunkLength?: InternalChunkLength;

  constructor(obj?: Partial<BroadcastTsMuxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.segmentLength = map(obj.segmentLength);
    this.filename = map(obj.filename);
    this.configuration = map(obj.configuration, BroadcastTsMuxingConfiguration);
    this.internalChunkLength = map(obj.internalChunkLength, InternalChunkLength);
  }
}

export default BroadcastTsMuxing;

