import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import ChannelLayout from './ChannelLayout';

/**
 * @export
 * @class Mp2AudioConfiguration
 */
export class Mp2AudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Mp2AudioConfiguration
   */
  public type: 'MP2' = 'MP2';

  /**
   * Channel layout of the audio codec configuration
   * @type {ChannelLayout}
   * @memberof Mp2AudioConfiguration
   */
  public channelLayout?: ChannelLayout;

  constructor(obj: Partial<Mp2AudioConfiguration>) {
    super(obj);

    this.channelLayout = obj.channelLayout;
  }
}

export default Mp2AudioConfiguration;

