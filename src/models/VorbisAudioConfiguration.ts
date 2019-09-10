import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';
import VorbisChannelLayout from './VorbisChannelLayout';

/**
 * @export
 * @class VorbisAudioConfiguration
 */
export class VorbisAudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof VorbisAudioConfiguration
   */
  public type: CodecConfigType.VORBIS = CodecConfigType.VORBIS;

  /**
   * Channel layout of the audio codec configuration
   * @type {VorbisChannelLayout}
   * @memberof VorbisAudioConfiguration
   */
  public channelLayout?: VorbisChannelLayout;

  constructor(obj?: Partial<VorbisAudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
  }
}

export default VorbisAudioConfiguration;

