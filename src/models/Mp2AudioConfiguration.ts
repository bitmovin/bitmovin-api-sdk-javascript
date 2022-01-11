import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import ChannelLayout from './ChannelLayout';
import CodecConfigType from './CodecConfigType';

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
  public readonly type: CodecConfigType = CodecConfigType.MP2;

  /**
   * Channel layout of the audio codec configuration
   * @type {ChannelLayout}
   * @memberof Mp2AudioConfiguration
   */
  public channelLayout?: ChannelLayout;

  constructor(obj?: Partial<Mp2AudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
  }
}

export default Mp2AudioConfiguration;

