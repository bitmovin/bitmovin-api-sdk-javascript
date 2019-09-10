import {map, mapArray} from '../common/Mapper';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class Cea708CaptionInputStream
 */
export class Cea708CaptionInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof Cea708CaptionInputStream
   */
  public type: InputStreamType.CAPTION_CEA708 = InputStreamType.CAPTION_CEA708;

  /**
   * Id of the Input (required)
   * @type {string}
   * @memberof Cea708CaptionInputStream
   */
  public inputId?: string;

  /**
   * Path to media file (required)
   * @type {string}
   * @memberof Cea708CaptionInputStream
   */
  public inputPath?: string;

  /**
   * The channel number of the subtitle on the respective stream position. Must not be smaller than 1 (required)
   * @type {number}
   * @memberof Cea708CaptionInputStream
   */
  public channel?: number;

  constructor(obj?: Partial<Cea708CaptionInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.channel = map(obj.channel);
  }
}

export default Cea708CaptionInputStream;

