import {map, mapArray} from '../common/Mapper';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';
import StreamSelectionMode from './StreamSelectionMode';

/**
 * @export
 * @class IngestInputStream
 */
export class IngestInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof IngestInputStream
   */
  public readonly type: InputStreamType = InputStreamType.INGEST;

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
   * Position of the stream, starting from 0.
   * @type {number}
   * @memberof IngestInputStream
   */
  public position?: number;

  constructor(obj?: Partial<IngestInputStream>) {
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

export default IngestInputStream;

