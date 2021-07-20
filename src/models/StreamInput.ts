import {map, mapArray} from '../common/Mapper';
import EncodingStreamInputDetails from './EncodingStreamInputDetails';
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
   * Position of the stream, starting from 0.
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

  /**
   * Input analysis details  This property is populated after the encoding has finished 
   * @type {EncodingStreamInputDetails}
   * @memberof StreamInput
   */
  public analysisDetails?: EncodingStreamInputDetails;

  constructor(obj?: Partial<StreamInput>) {
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.selectionMode = map(obj.selectionMode);
    this.position = map(obj.position);
    this.inputStreamId = map(obj.inputStreamId);
    this.analysisDetails = map(obj.analysisDetails, EncodingStreamInputDetails);
  }
}

export default StreamInput;

