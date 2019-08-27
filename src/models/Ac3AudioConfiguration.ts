import {map} from '../common/Mapper';
import Ac3ChannelLayout from './Ac3ChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class Ac3AudioConfiguration
 */
export class Ac3AudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Ac3AudioConfiguration
   */
  public type: 'AC3' = 'AC3';

  /**
   * Channel layout of the audio codec configuration
   * @type {Ac3ChannelLayout}
   * @memberof Ac3AudioConfiguration
   */
  public channelLayout?: Ac3ChannelLayout;

  constructor(obj: Partial<Ac3AudioConfiguration>) {
    super(obj);

    this.channelLayout = obj.channelLayout;
  }
}

export default Ac3AudioConfiguration;

