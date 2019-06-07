import {map} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class HeAacV2AudioConfiguration
 */
export class HeAacV2AudioConfiguration extends AudioConfiguration {
  constructor(obj: any) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }

  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof HeAacV2AudioConfiguration
   */
  public channelLayout?: AacChannelLayout;
}

export default HeAacV2AudioConfiguration;

