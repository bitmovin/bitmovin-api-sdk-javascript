import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import ChannelLayout from './ChannelLayout';

/**
 * @export
 * @class Mp3AudioConfiguration
 */
export class Mp3AudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Mp3AudioConfiguration
   */
  public type: 'MP3' = 'MP3';

  /**
   * Channel layout of the audio codec configuration
   * @type {ChannelLayout}
   * @memberof Mp3AudioConfiguration
   */
  public channelLayout?: ChannelLayout;

  constructor(obj: Partial<Mp3AudioConfiguration>) {
    super(obj);

    this.channelLayout = obj.channelLayout;
  }
}

export default Mp3AudioConfiguration;

