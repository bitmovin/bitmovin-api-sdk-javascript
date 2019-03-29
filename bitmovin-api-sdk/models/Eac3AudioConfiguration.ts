import {map} from '../common/Mapper';
import Ac3ChannelLayout from './Ac3ChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class Eac3AudioConfiguration
 */
export default class Eac3AudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {Ac3ChannelLayout}
   * @memberof Eac3AudioConfiguration
   */
  public channelLayout?: Ac3ChannelLayout;
}
