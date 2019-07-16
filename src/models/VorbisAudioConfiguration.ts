import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import VorbisChannelLayout from './VorbisChannelLayout';

/**
 * @export
 * @class VorbisAudioConfiguration
 */
export class VorbisAudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {VorbisChannelLayout}
   * @memberof VorbisAudioConfiguration
   */
  public channelLayout?: VorbisChannelLayout;

  constructor(obj: Partial<VorbisAudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default VorbisAudioConfiguration;

