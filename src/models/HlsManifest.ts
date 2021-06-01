import {map, mapArray} from '../common/Mapper';
import ChannelsAttributeForAudio from './ChannelsAttributeForAudio';
import EncodingOutput from './EncodingOutput';
import HlsTargetDurationRoundingMode from './HlsTargetDurationRoundingMode';
import HlsVersion from './HlsVersion';
import Manifest from './Manifest';
import ManifestType from './ManifestType';
import Status from './Status';

/**
 * @export
 * @class HlsManifest
 */
export class HlsManifest extends Manifest {
  /**
   * The filename of your manifest. If this is not set, the `name` is used as output file name. Either one of `name` or `manifestName` is required. Be aware that spaces will be replaced with underlines (`_`) on the output.
   * @type {string}
   * @memberof HlsManifest
   */
  public manifestName?: string;

  /**
   * If this is set, the EXT-X-VERSION tags of the Media Playlists are set to the provided version
   * @type {HlsVersion}
   * @memberof HlsManifest
   */
  public hlsMediaPlaylistVersion?: HlsVersion;

  /**
   * If this is set, the EXT-X-VERSION tag of the Master Playlist is set to the provided version
   * @type {HlsVersion}
   * @memberof HlsManifest
   */
  public hlsMasterPlaylistVersion?: HlsVersion;

  /**
   * Controls the behaviour of the CHANNELS attribute for the EXT-X-VERSION tag
   * @type {ChannelsAttributeForAudio}
   * @memberof HlsManifest
   */
  public channelsAttributeForAudio?: ChannelsAttributeForAudio;

  /**
   * The rounding applied to target duration. Two possible rouding modes exist: NORMAL_ROUNDING, when the target duration is rounded to the nearest integer, or UPWARDS_ROUNDING, when the target duration is rounded to the highest integer. 
   * @type {HlsTargetDurationRoundingMode}
   * @memberof HlsManifest
   */
  public targetDurationRoundingMode?: HlsTargetDurationRoundingMode;

  constructor(obj?: Partial<HlsManifest>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.manifestName = map(obj.manifestName);
    this.hlsMediaPlaylistVersion = map(obj.hlsMediaPlaylistVersion);
    this.hlsMasterPlaylistVersion = map(obj.hlsMasterPlaylistVersion);
    this.channelsAttributeForAudio = map(obj.channelsAttributeForAudio);
    this.targetDurationRoundingMode = map(obj.targetDurationRoundingMode);
  }
}

export default HlsManifest;

