import {map} from '../common/Mapper';
import Ac3ChannelLayout from './Ac3ChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class Eac3AudioConfiguration
 */
export class Eac3AudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {Ac3ChannelLayout}
   * @memberof Eac3AudioConfiguration
   */
  public channelLayout?: Ac3ChannelLayout;

  constructor(obj: Partial<Eac3AudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default Eac3AudioConfiguration;

