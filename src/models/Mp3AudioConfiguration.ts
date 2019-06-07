import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import ChannelLayout from './ChannelLayout';

/**
 * @export
 * @class Mp3AudioConfiguration
 */
export class Mp3AudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {ChannelLayout}
   * @memberof Mp3AudioConfiguration
   */
  public channelLayout?: ChannelLayout;
}

export default Mp3AudioConfiguration;

