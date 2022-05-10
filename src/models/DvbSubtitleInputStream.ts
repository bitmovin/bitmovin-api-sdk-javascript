import {map, mapArray} from '../common/Mapper';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';
import StreamSelectionMode from './StreamSelectionMode';

/**
 * @export
 * @class DvbSubtitleInputStream
 */
export class DvbSubtitleInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof DvbSubtitleInputStream
   */
  public readonly type: InputStreamType = InputStreamType.DVB_SUBTITLE;

  /**
   * ID of an Input resource defining the input storage
   * @type {string}
   * @memberof DvbSubtitleInputStream
   */
  public inputId?: string;

  /**
   * Path to an input media file
   * @type {string}
   * @memberof DvbSubtitleInputStream
   */
  public inputPath?: string;

  /**
   * Specifies the strategy for selecting a stream from the input file. Supported values for VOD encodings: AUTO, POSITION_ABSOLUTE, SUBTITLE_RELATIVE. Supported values for LIVE encodings: POSITION_ABSOLUTE
   * @type {StreamSelectionMode}
   * @memberof DvbSubtitleInputStream
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream to be selected from the input file (zero-based). Must not be set in combination with selectionMode 'AUTO', defaults to 0 for any other selectionMode.
   * @type {number}
   * @memberof DvbSubtitleInputStream
   */
  public position?: number;

  constructor(obj?: Partial<DvbSubtitleInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.selectionMode = map(obj.selectionMode);
    this.position = map(obj.position);
  }
}

export default DvbSubtitleInputStream;

