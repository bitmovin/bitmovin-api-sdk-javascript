import {map} from '../common/Mapper';
import StreamSelectionMode from './StreamSelectionMode';

/**
 * @export
 * @class StreamInput
 */
export class StreamInput {
  /**
   * Id of input
   * @type {string}
   * @memberof StreamInput
   */
  public inputId?: string;

  /**
   * Path to media file
   * @type {string}
   * @memberof StreamInput
   */
  public inputPath?: string;

  /**
   * Specifies the algorithm how the stream in the input file will be selected
   * @type {StreamSelectionMode}
   * @memberof StreamInput
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream
   * @type {number}
   * @memberof StreamInput
   */
  public position?: number;

  /**
   * Set this property instead of all others to reference an ingest, trimming or concatenation input stream
   * @type {string}
   * @memberof StreamInput
   */
  public inputStreamId?: string;

  constructor(obj: Partial<StreamInput>) {

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
    this.selectionMode = obj.selectionMode;
    this.position = obj.position;
    this.inputStreamId = obj.inputStreamId;
  }
}

export default StreamInput;

