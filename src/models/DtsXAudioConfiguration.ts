import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import DtsXChannelLayout from './DtsXChannelLayout';
import MediaConfigBitrate from './MediaConfigBitrate';
import OttLoudnessMode from './OttLoudnessMode';

/**
 * The configuration for the DTS:X
 * @export
 * @class DtsXAudioConfiguration
 */
export class DtsXAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof DtsXAudioConfiguration
   */
  public type: CodecConfigType.DTSX = CodecConfigType.DTSX;

  /**
   * @type {DtsXChannelLayout}
   * @memberof DtsXAudioConfiguration
   */
  public channelLayout?: DtsXChannelLayout;

  /**
   * Loudness relative to full scale (K-weighted).
   * @type {number}
   * @memberof DtsXAudioConfiguration
   */
  public lkfsValue?: number;

  /**
   * @type {OttLoudnessMode}
   * @memberof DtsXAudioConfiguration
   */
  public ottLoudnessMode?: OttLoudnessMode;

  /**
   * Specifies the sync interval which ranges from 1 to 10
   * @type {number}
   * @memberof DtsXAudioConfiguration
   */
  public syncInterval?: number;

  constructor(obj?: Partial<DtsXAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.lkfsValue = map(obj.lkfsValue);
    this.ottLoudnessMode = map(obj.ottLoudnessMode);
    this.syncInterval = map(obj.syncInterval);
  }
}

export default DtsXAudioConfiguration;

