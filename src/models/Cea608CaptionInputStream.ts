import {map, mapArray} from '../common/Mapper';
import Cea608ChannelType from './Cea608ChannelType';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class Cea608CaptionInputStream
 */
export class Cea608CaptionInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof Cea608CaptionInputStream
   */
  public readonly type: InputStreamType = InputStreamType.CAPTION_CEA608;

  /**
   * Id of the Input (required)
   * @type {string}
   * @memberof Cea608CaptionInputStream
   */
  public inputId?: string;

  /**
   * Path to media file (required)
   * @type {string}
   * @memberof Cea608CaptionInputStream
   */
  public inputPath?: string;

  /**
   * The channel number of the subtitle on the respective stream position (required)
   * @type {Cea608ChannelType}
   * @memberof Cea608CaptionInputStream
   */
  public channel?: Cea608ChannelType;

  constructor(obj?: Partial<Cea608CaptionInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.channel = map(obj.channel);
  }
}

export default Cea608CaptionInputStream;

