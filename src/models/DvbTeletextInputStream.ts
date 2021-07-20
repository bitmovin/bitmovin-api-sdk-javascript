import {map, mapArray} from '../common/Mapper';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';
import StreamSelectionMode from './StreamSelectionMode';

/**
 * @export
 * @class DvbTeletextInputStream
 */
export class DvbTeletextInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof DvbTeletextInputStream
   */
  public type: InputStreamType.DVB_TELETEXT = InputStreamType.DVB_TELETEXT;

  /**
   * Id of input
   * @type {string}
   * @memberof DvbTeletextInputStream
   */
  public inputId?: string;

  /**
   * Path to media file
   * @type {string}
   * @memberof DvbTeletextInputStream
   */
  public inputPath?: string;

  /**
   * Specifies the algorithm how the stream in the input file will be selected
   * @type {StreamSelectionMode}
   * @memberof DvbTeletextInputStream
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream, starting from 0.
   * @type {number}
   * @memberof DvbTeletextInputStream
   */
  public position?: number;

  /**
   * Page number of the subtitles
   * @type {number}
   * @memberof DvbTeletextInputStream
   */
  public page?: number;

  constructor(obj?: Partial<DvbTeletextInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.selectionMode = map(obj.selectionMode);
    this.position = map(obj.position);
    this.page = map(obj.page);
  }
}

export default DvbTeletextInputStream;

