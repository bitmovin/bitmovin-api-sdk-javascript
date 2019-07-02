import {map} from '../common/Mapper';
import Cea608ChannelType from './Cea608ChannelType';
import InputStream from './InputStream';

/**
 * @export
 * @class Cea608CaptionInputStream
 */
export class Cea608CaptionInputStream extends InputStream {
  constructor(obj: any) {
    super(obj);
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.channel = map(obj.channel);
  }

  /**
   * Id of the Input (required)
   * @type {string}
   * @memberof Cea608CaptionInputStream
   */
  public inputId: string;
  /**
   * Path to media file (required)
   * @type {string}
   * @memberof Cea608CaptionInputStream
   */
  public inputPath: string;
  /**
   * The channel number of the subtitle on the respective stream position (required)
   * @type {Cea608ChannelType}
   * @memberof Cea608CaptionInputStream
   */
  public channel: Cea608ChannelType;
}

export default Cea608CaptionInputStream;

