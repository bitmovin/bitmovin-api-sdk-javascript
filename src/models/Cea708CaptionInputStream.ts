import {map} from '../common/Mapper';
import InputStream from './InputStream';

/**
 * @export
 * @class Cea708CaptionInputStream
 */
export class Cea708CaptionInputStream extends InputStream {
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

  constructor(obj: Partial<Cea708CaptionInputStream>) {
    super(obj);

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
    this.channel = obj.channel;
  }
}

export default Cea708CaptionInputStream;

