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
export class Mp4Muxing extends Muxing {
  /**
   * Discriminator property for Muxing
   * @type {string}
   * @memberof Mp4Muxing
   */
  public type: 'MP4' = 'MP4';

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

  constructor(obj: Partial<Mp4Muxing>) {
    super(obj);

    this.filename = obj.filename;
    this.fragmentDuration = obj.fragmentDuration;
    this.timeCode = map<TimeCode>(obj.timeCode, TimeCode);
    this.fragmentedMP4MuxingManifestType = obj.fragmentedMP4MuxingManifestType;
    this.internalChunkLength = map<InternalChunkLength>(obj.internalChunkLength, InternalChunkLength);
  }
}

export default Mp4Muxing;

