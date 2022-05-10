import {map, mapArray} from '../common/Mapper';
import EncodingStreamInputDetails from './EncodingStreamInputDetails';
import StreamSelectionMode from './StreamSelectionMode';

/**
 * @export
 * @class StreamInput
 */
export class StreamInput {
  /**
   * ID of an Input resource defining the input storage. Required if 'inputStreamId' is not set.
   * @type {string}
   * @memberof StreamInput
   */
  public inputId?: string;

  /**
   * Path to an input media file. Required if 'inputStreamId' is not set.
   * @type {string}
   * @memberof StreamInput
   */
  public inputPath?: string;

  /**
   * Specifies the strategy for selecting a stream from the input file. Must not be set when 'inputStreamId' is set.
   * @type {StreamSelectionMode}
   * @memberof StreamInput
   */
  public selectionMode?: StreamSelectionMode;

  /**
   * Position of the stream to be selected from the input file (zero-based). Must not be set in combination with selectionMode 'AUTO', defaults to 0 for any other selectionMode.
   * @type {number}
   * @memberof StreamInput
   */
  public position?: number;

  /**
   * Set this property instead of all others to reference an InputStream resource (e.g. an Ingest-, Trimming- or ConcatenationInputStream)
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

