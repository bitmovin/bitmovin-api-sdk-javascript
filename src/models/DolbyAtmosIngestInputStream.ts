import {map, mapArray} from '../common/Mapper';
import DolbyAtmosInputFormat from './DolbyAtmosInputFormat';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class DolbyAtmosIngestInputStream
 */
export class DolbyAtmosIngestInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof DolbyAtmosIngestInputStream
   */
  public type: InputStreamType.DOLBY_ATMOS = InputStreamType.DOLBY_ATMOS;

  /**
   * Id of input (required)
   * @type {string}
   * @memberof DolbyAtmosIngestInputStream
   */
  public inputId?: string;

  /**
   * Path to the Dolby Atmos input file (required)
   * @type {string}
   * @memberof DolbyAtmosIngestInputStream
   */
  public inputPath?: string;

  /**
   * Input file format of the Dolby Atmos input file.  Set it to DAMF if the given input file is a Dolby Atmos Master File (.atmos). Set it to ADM if the given input file is an Audio Definition Model Broadcast Wave Format file (.wav) (required)
   * @type {DolbyAtmosInputFormat}
   * @memberof DolbyAtmosIngestInputStream
   */
  public inputFormat?: DolbyAtmosInputFormat;

  constructor(obj?: Partial<DolbyAtmosIngestInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.inputFormat = map(obj.inputFormat);
  }
}

export default DolbyAtmosIngestInputStream;

