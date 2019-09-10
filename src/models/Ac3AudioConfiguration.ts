import {map, mapArray} from '../common/Mapper';
import Ac3ChannelLayout from './Ac3ChannelLayout';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';

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
  public type: CodecConfigType.AC3 = CodecConfigType.AC3;

  /**
   * Channel layout of the audio codec configuration
   * @type {Ac3ChannelLayout}
   * @memberof Ac3AudioConfiguration
   */
  public channelLayout?: Ac3ChannelLayout;

  /**
   * The highest frequency that will pass the audio encoder. This value is optional.
   * @type {number}
   * @memberof Ac3AudioConfiguration
   */
  public cutoffFrequency?: number;

  constructor(obj?: Partial<Ac3AudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.cutoffFrequency = map(obj.cutoffFrequency);
  }
}

export default Ac3AudioConfiguration;

