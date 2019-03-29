import {map} from '../common/Mapper';
import Ac3ChannelLayout from './Ac3ChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class Ac3AudioConfiguration
 */
export default class Ac3AudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {Ac3ChannelLayout}
   * @memberof Ac3AudioConfiguration
   */
  public channelLayout?: Ac3ChannelLayout;
}
