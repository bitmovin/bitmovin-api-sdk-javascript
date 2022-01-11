import {map, mapArray} from '../common/Mapper';
import Ac3ChannelLayout from './Ac3ChannelLayout';
import AudioConfiguration from './AudioConfiguration';
import CodecConfigType from './CodecConfigType';

/**
 * @export
 * @class Eac3AudioConfiguration
 */
export class Eac3AudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Eac3AudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.EAC3;

  /**
   * Channel layout of the audio codec configuration
   * @type {Ac3ChannelLayout}
   * @memberof Eac3AudioConfiguration
   */
  public channelLayout?: Ac3ChannelLayout;

  /**
   * The highest frequency that will pass the audio encoder. This value is optional.
   * @type {number}
   * @memberof Eac3AudioConfiguration
   */
  public cutoffFrequency?: number;

  constructor(obj?: Partial<Eac3AudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
    this.cutoffFrequency = map(obj.cutoffFrequency);
  }
}

export default Eac3AudioConfiguration;

