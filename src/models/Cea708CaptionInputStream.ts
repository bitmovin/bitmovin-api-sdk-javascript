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
  public readonly type: InputStreamType = InputStreamType.CAPTION_CEA708;

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
   * The CEA-708 caption service to extract, as defined in ANSI/CTA-708-E. Service 1 is the primary caption service and is used when this value is not set. Which services a stream carries depends on the source, so check it before selecting anything other than service 1.
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

