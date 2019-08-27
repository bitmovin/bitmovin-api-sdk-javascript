import {map} from '../common/Mapper';
import BroadcastTsMuxingConfiguration from './BroadcastTsMuxingConfiguration';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import InternalChunkLength from './InternalChunkLength';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
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
  public type: 'BROADCAST_TS' = 'BROADCAST_TS';

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

  constructor(obj: Partial<BroadcastTsMuxing>) {
    super(obj);

    this.segmentLength = obj.segmentLength;
    this.filename = obj.filename;
    this.configuration = map<BroadcastTsMuxingConfiguration>(obj.configuration, BroadcastTsMuxingConfiguration);
    this.internalChunkLength = map<InternalChunkLength>(obj.internalChunkLength, InternalChunkLength);
  }
}

export default BroadcastTsMuxing;

