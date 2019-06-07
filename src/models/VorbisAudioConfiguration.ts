import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import VorbisChannelLayout from './VorbisChannelLayout';

/**
 * @export
 * @class VorbisAudioConfiguration
 */
export class VorbisAudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {VorbisChannelLayout}
   * @memberof VorbisAudioConfiguration
   */
  public channelLayout?: VorbisChannelLayout;
}

export default VorbisAudioConfiguration;

