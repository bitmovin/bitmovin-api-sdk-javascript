import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import FragmentedMp4MuxingManifestType from './FragmentedMp4MuxingManifestType';
import Ignoring from './Ignoring';
import InternalChunkLength from './InternalChunkLength';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';
import TimeCode from './TimeCode';

/**
 * @export
 * @class Mp4Muxing
 */
export default class Mp4Muxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.filename = map(obj.filename);
    this.fragmentDuration = map(obj.fragmentDuration);
    this.timeCode = map<TimeCode>(obj.timeCode, TimeCode);
    this.fragmentedMP4MuxingManifestType = map(obj.fragmentedMP4MuxingManifestType);
    this.internalChunkLength = map<InternalChunkLength>(obj.internalChunkLength, InternalChunkLength);
  }

  /**
   * Name of the new Video
   * @type {string}
   * @memberof Mp4Muxing
   */
  public filename?: string;
  /**
   *  Duration of fragments in milliseconds. Required for Fragmented MP4 Muxing (for Smooth Streaming or DASH On-Demand). Not setting this will result in unfragmented mp4.
   * @type {number}
   * @memberof Mp4Muxing
   */
  public fragmentDuration?: number;
  /**
   * @type {TimeCode}
   * @memberof Mp4Muxing
   */
  public timeCode?: TimeCode;
  /**
   * @type {FragmentedMp4MuxingManifestType}
   * @memberof Mp4Muxing
   */
  public fragmentedMP4MuxingManifestType?: FragmentedMp4MuxingManifestType;
  /**
   * Modifies the internal chunk length used for chunked encoding
   * @type {InternalChunkLength}
   * @memberof Mp4Muxing
   */
  public internalChunkLength?: InternalChunkLength;
}
