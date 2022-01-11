import {map, mapArray} from '../common/Mapper';
import AudioConfiguration from './AudioConfiguration';
import ChannelLayout from './ChannelLayout';
import CodecConfigType from './CodecConfigType';

/**
 * @export
 * @class Mp3AudioConfiguration
 */
export class Mp3AudioConfiguration extends AudioConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof Mp3AudioConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.MP3;

  /**
   * Channel layout of the audio codec configuration
   * @type {ChannelLayout}
   * @memberof Mp3AudioConfiguration
   */
  public channelLayout?: ChannelLayout;

  constructor(obj?: Partial<Mp3AudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.channelLayout = map(obj.channelLayout);
  }
}

export default Mp3AudioConfiguration;

