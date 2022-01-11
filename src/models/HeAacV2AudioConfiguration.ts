import {map, mapArray} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import HeAacV2Signaling from './HeAacV2Signaling';

/**
 * @export
 * @class HeAacV2AudioConfiguration
 */
export class HeAacV2AudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof HeAacV2AudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.HE_AAC_V2;

  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof HeAacV2AudioConfiguration
   */
  public channelLayout?: AacChannelLayout;

  /**
   * Sets the Spectral Band Replication (SBR) and Parameteric Stereo (PS) signaling style.
   * @type {HeAacV2Signaling}
   * @memberof HeAacV2AudioConfiguration
   */
  public signaling?: HeAacV2Signaling;

  constructor(obj?: Partial<HeAacV2AudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.signaling = map(obj.signaling);
  }
}

export default HeAacV2AudioConfiguration;

