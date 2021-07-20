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
  public type: InputStreamType.DVB_SUBTITLE = InputStreamType.DVB_SUBTITLE;

  /**
   * Id of input
   * @type {string}
   * @memberof DvbSubtitleInputStream
   */
  public inputId?: string;

  /**
   * Path to media file
   * @type {string}
   * @memberof DvbSubtitleInputStream
   */
  public inputPath?: string;

  /**
   * Specifies the algorithm for selecting a stream from the input file. Supported values for VOD encodings: AUTO, POSITION_ABSOLUTE, SUBTITLE_RELATIVE. Supported values for LIVE encodings: POSITION_ABSOLUTE
   * @type {StreamSelectionMode}
   * @memberof DvbSubtitleInputStream
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream, starting from 0.
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

