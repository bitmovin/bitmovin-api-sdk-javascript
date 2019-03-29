import {map} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import ChannelLayout from './ChannelLayout';

/**
 * @export
 * @class Mp2AudioConfiguration
 */
export default class Mp2AudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {ChannelLayout}
   * @memberof Mp2AudioConfiguration
   */
  public channelLayout?: ChannelLayout;
}
