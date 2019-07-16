import {map} from '../common/Mapper';
import AacChannelLayout from './AacChannelLayout';
import AudioConfiguration from './AudioConfiguration';

/**
 * @export
 * @class HeAacV2AudioConfiguration
 */
export class HeAacV2AudioConfiguration extends AudioConfiguration {
  /**
   * Channel layout of the audio codec configuration
   * @type {AacChannelLayout}
   * @memberof HeAacV2AudioConfiguration
   */
  public channelLayout?: AacChannelLayout;

  constructor(obj: Partial<HeAacV2AudioConfiguration>) {
    super(obj);
    this.channelLayout = map(obj.channelLayout);
  }
}

export default HeAacV2AudioConfiguration;

