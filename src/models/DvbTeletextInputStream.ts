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
  public readonly type: InputStreamType = InputStreamType.DVB_TELETEXT;

  /**
   * ID of an Input resource defining the input storage
   * @type {string}
   * @memberof DvbTeletextInputStream
   */
  public inputId?: string;

  /**
   * Path to an input media file
   * @type {string}
   * @memberof DvbTeletextInputStream
   */
  public inputPath?: string;

  /**
   * Specifies the strategy for selecting a stream from the input file
   * @type {StreamSelectionMode}
   * @memberof DvbTeletextInputStream
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream to be selected from the input file (zero-based). Must not be set in combination with selectionMode 'AUTO', defaults to 0 for any other selectionMode.
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

