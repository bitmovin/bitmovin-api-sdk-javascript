import {map} from '../common/Mapper';
import InputStream from './InputStream';
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
  public type: 'INGEST' = 'INGEST';

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

  constructor(obj: Partial<IngestInputStream>) {
    super(obj);

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
    this.selectionMode = obj.selectionMode;
    this.position = obj.position;
  }
}

export default IngestInputStream;

