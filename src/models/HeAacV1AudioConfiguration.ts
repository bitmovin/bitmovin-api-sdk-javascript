import {map, mapArray} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import HeAacV1Signaling from './HeAacV1Signaling';

/**
 * @export
 * @class HeAacV1AudioConfiguration
 */
export class HeAacV1AudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof HeAacV1AudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.HE_AAC_V1;

  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof HeAacV1AudioConfiguration
   */
  public channelLayout?: AacChannelLayout;

  /**
   * Spectral Band Replication (SBR) and Parameteric Stereo (PS) signaling style.
   * @type {HeAacV1Signaling}
   * @memberof HeAacV1AudioConfiguration
   */
  public signaling?: HeAacV1Signaling;

  constructor(obj?: Partial<HeAacV1AudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.signaling = map(obj.signaling);
  }
}

export default HeAacV1AudioConfiguration;

