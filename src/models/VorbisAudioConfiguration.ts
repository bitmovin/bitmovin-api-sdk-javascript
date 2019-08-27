import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
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
  public type: 'VORBIS' = 'VORBIS';

  /**
   * Channel layout of the audio codec configuration
   * @type {VorbisChannelLayout}
   * @memberof VorbisAudioConfiguration
   */
  public channelLayout?: VorbisChannelLayout;

  constructor(obj: Partial<VorbisAudioConfiguration>) {
    super(obj);

    this.channelLayout = obj.channelLayout;
  }
}

export default VorbisAudioConfiguration;

