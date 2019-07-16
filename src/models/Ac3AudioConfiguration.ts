import {map} from '../common/Mapper';
import Ac3ChannelLayout from './Ac3ChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class Ac3AudioConfiguration
 */
export class Ac3AudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {Ac3ChannelLayout}
   * @memberof Ac3AudioConfiguration
   */
  public channelLayout?: Ac3ChannelLayout;

  constructor(obj: Partial<Ac3AudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default Ac3AudioConfiguration;

