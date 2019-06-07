import {map} from '../common/Mapper';
import InputStream from './InputStream';
import StreamSelectionMode from './StreamSelectionMode';

/**
 * @export
 * @class IngestInputStream
 */
export class IngestInputStream extends InputStream {
  constructor(obj: any) {
    super(obj);
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.selectionMode = map(obj.selectionMode);
    this.position = map(obj.position);
  }

  /**
   * Id of input
   * @type {string}
   * @memberof IngestInputStream
   */
  public inputId?: string;
  /**
   * Path to media file
   * @type {string}
   * @memberof IngestInputStream
   */
  public inputPath?: string;
  /**
   * Specifies the algorithm how the stream in the input file will be selected
   * @type {StreamSelectionMode}
   * @memberof IngestInputStream
   */
  public selectionMode?: StreamSelectionMode;
  /**
   * Position of the stream
   * @type {number}
   * @memberof IngestInputStream
   */
  public position?: number;
}

export default IngestInputStream;

