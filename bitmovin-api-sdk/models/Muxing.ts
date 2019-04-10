import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import BroadcastTsMuxing from './BroadcastTsMuxing';
import CmafMuxing from './CmafMuxing';
import EncodingOutput from './EncodingOutput';
import Fmp4Muxing from './Fmp4Muxing';
import Ignoring from './Ignoring';
import Mp3Muxing from './Mp3Muxing';
import Mp4Muxing from './Mp4Muxing';
import MuxingStream from './MuxingStream';
import ProgressiveMovMuxing from './ProgressiveMovMuxing';
import ProgressiveTsMuxing from './ProgressiveTsMuxing';
import ProgressiveWebmMuxing from './ProgressiveWebmMuxing';
import StreamConditionsMode from './StreamConditionsMode';
import TsMuxing from './TsMuxing';
import WebmMuxing from './WebmMuxing';

/**
 * @export
 * @class Muxing
 */
export default class Muxing extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.streams = map<MuxingStream>(obj.streams, MuxingStream);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
    this.avgBitrate = map(obj.avgBitrate);
    this.minBitrate = map(obj.minBitrate);
    this.maxBitrate = map(obj.maxBitrate);
    this.ignoredBy = map<Ignoring>(obj.ignoredBy, Ignoring);
    this.streamConditionsMode = map(obj.streamConditionsMode);
  }

  /**
   * @type {Array<MuxingStream>}
   * @memberof Muxing
   */
  public streams: Array<MuxingStream>;
  /**
   * @type {Array<EncodingOutput>}
   * @memberof Muxing
   */
  public outputs?: Array<EncodingOutput>;
  /**
   * Average bitrate. Available after encoding finishes.
   * @type {number}
   * @memberof Muxing
   */
  public avgBitrate?: number;
  /**
   * Min bitrate. Available after encoding finishes.
   * @type {number}
   * @memberof Muxing
   */
  public minBitrate?: number;
  /**
   * Max bitrate. Available after encoding finishes.
   * @type {number}
   * @memberof Muxing
   */
  public maxBitrate?: number;
  /**
   * If this is set and contains objects, then this muxing has been ignored during the encoding process
   * @type {Array<Ignoring>}
   * @memberof Muxing
   */
  public ignoredBy?: Array<Ignoring>;
  /**
   * Specifies how to handle streams that don't fulfill stream conditions
   * @type {StreamConditionsMode}
   * @memberof Muxing
   */
  public streamConditionsMode?: StreamConditionsMode;
}
