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
   * Specifies the algorithm how the stream in the input file will be selected. Only POSITION_ABSOLUTE is supported.
   * @type {StreamSelectionMode}
   * @memberof DvbSubtitleInputStream
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream
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

