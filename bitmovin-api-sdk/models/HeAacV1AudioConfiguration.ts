import {map} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class HeAacV1AudioConfiguration
 */
export default class HeAacV1AudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof HeAacV1AudioConfiguration
   */
  public channelLayout?: AacChannelLayout;
}
