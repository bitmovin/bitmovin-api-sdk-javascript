import {map, mapArray} from '../common/Mapper';
import DolbyVisionMuxingConfiguration from './DolbyVisionMuxingConfiguration';
import EncodingOutput from './EncodingOutput';
import FragmentedMp4MuxingManifestType from './FragmentedMp4MuxingManifestType';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import MuxingType from './MuxingType';
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
  public readonly type: MuxingType = MuxingType.MP4;

  /**
   * Name of the output file
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
   * Dolby Vision specific configuration
   * @type {DolbyVisionMuxingConfiguration}
   * @memberof Mp4Muxing
   */
  public dolbyVisionConfiguration?: DolbyVisionMuxingConfiguration;

  constructor(obj?: Partial<Mp4Muxing>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
    this.fragmentDuration = map(obj.fragmentDuration);
    this.timeCode = map(obj.timeCode, TimeCode);
    this.fragmentedMP4MuxingManifestType = map(obj.fragmentedMP4MuxingManifestType);
    this.dolbyVisionConfiguration = map(obj.dolbyVisionConfiguration, DolbyVisionMuxingConfiguration);
  }
}

export default Mp4Muxing;

