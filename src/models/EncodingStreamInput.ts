import {map, mapArray} from '../common/Mapper';
import EncodingStreamInputDetails from './EncodingStreamInputDetails';

/**
 * @export
 * @class EncodingStreamInput
 */
export class EncodingStreamInput {
  /**
   * Input id (required)
   * @type {string}
   * @memberof EncodingStreamInput
   */
  public inputId?: string;

  /**
   * Path to media file (required)
   * @type {string}
   * @memberof EncodingStreamInput
   */
  public inputPath?: string;

  /**
   * @type {EncodingStreamInputDetails}
   * @memberof EncodingStreamInput
   */
  public details?: EncodingStreamInputDetails;

  constructor(obj?: Partial<EncodingStreamInput>) {
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.details = map(obj.details, EncodingStreamInputDetails);
  }
}

export default EncodingStreamInput;

