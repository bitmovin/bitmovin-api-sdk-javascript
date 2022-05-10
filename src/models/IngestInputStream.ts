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
   * ID of an Input resource defining the input storage (required)
   * @type {string}
   * @memberof IngestInputStream
   */
  public inputId?: string;

  /**
   * Path to an input media file (required)
   * @type {string}
   * @memberof IngestInputStream
   */
  public inputPath?: string;

  /**
   * Specifies the strategy for selecting a stream from the input file
   * @type {StreamSelectionMode}
   * @memberof IngestInputStream
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream to be selected from the input file (zero-based). Must not be set in combination with selectionMode 'AUTO', defaults to 0 for any other selectionMode.
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

