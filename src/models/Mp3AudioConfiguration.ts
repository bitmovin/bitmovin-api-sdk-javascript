import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import ChannelLayout from './ChannelLayout';

/**
 * @export
 * @class Mp3AudioConfiguration
 */
export class Mp3AudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {ChannelLayout}
   * @memberof Mp3AudioConfiguration
   */
  public channelLayout?: ChannelLayout;

  constructor(obj: Partial<Mp3AudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default Mp3AudioConfiguration;

