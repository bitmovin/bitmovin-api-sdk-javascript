import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import BroadcastTsMuxing from './BroadcastTsMuxing';
import ChunkedTextMuxing from './ChunkedTextMuxing';
import CmafMuxing from './CmafMuxing';
import EncodingOutput from './EncodingOutput';
import Fmp4Muxing from './Fmp4Muxing';
import Ignoring from './Ignoring';
import Mp3Muxing from './Mp3Muxing';
import Mp4Muxing from './Mp4Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
import ProgressiveMovMuxing from './ProgressiveMovMuxing';
import ProgressiveTsMuxing from './ProgressiveTsMuxing';
import ProgressiveWebmMuxing from './ProgressiveWebmMuxing';
import SegmentedRawMuxing from './SegmentedRawMuxing';
import StreamConditionsMode from './StreamConditionsMode';
import TextMuxing from './TextMuxing';
import TsMuxing from './TsMuxing';
import WebmMuxing from './WebmMuxing';

export type MuxingUnion =
  Fmp4Muxing |
  CmafMuxing |
  Mp4Muxing |
  TsMuxing |
  WebmMuxing |
  Mp3Muxing |
  ProgressiveWebmMuxing |
  ProgressiveMovMuxing |
  ProgressiveTsMuxing |
  BroadcastTsMuxing |
  ChunkedTextMuxing |
  TextMuxing |
  SegmentedRawMuxing;

/**
 * @export
 * @class Muxing
 */
export class Muxing extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof MuxingType]: string; } = {
    FMP4: 'Fmp4Muxing',
    CMAF: 'CmafMuxing',
    MP4: 'Mp4Muxing',
    TS: 'TsMuxing',
    WEBM: 'WebmMuxing',
    MP3: 'Mp3Muxing',
    PROGRESSIVE_WEBM: 'ProgressiveWebmMuxing',
    PROGRESSIVE_MOV: 'ProgressiveMovMuxing',
    PROGRESSIVE_TS: 'ProgressiveTsMuxing',
    BROADCAST_TS: 'BroadcastTsMuxing',
    CHUNKED_TEXT: 'ChunkedTextMuxing',
    TEXT: 'TextMuxing',
    SEGMENTED_RAW: 'SegmentedRawMuxing'
  };

  /**
   * @type {MuxingStream[]}
   * @memberof Muxing
   */
  public streams?: MuxingStream[];

  /**
   * @type {EncodingOutput[]}
   * @memberof Muxing
   */
  public outputs?: EncodingOutput[];

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
   * @type {Ignoring[]}
   * @memberof Muxing
   */
  public ignoredBy?: Ignoring[];

  /**
   * Specifies how to handle streams that don't fulfill stream conditions
   * @type {StreamConditionsMode}
   * @memberof Muxing
   */
  public streamConditionsMode?: StreamConditionsMode;

  constructor(obj?: Partial<Muxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.streams = mapArray(obj.streams, MuxingStream);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.avgBitrate = map(obj.avgBitrate);
    this.minBitrate = map(obj.minBitrate);
    this.maxBitrate = map(obj.maxBitrate);
    this.ignoredBy = mapArray(obj.ignoredBy, Ignoring);
    this.streamConditionsMode = map(obj.streamConditionsMode);
  }
}

export default Muxing;

