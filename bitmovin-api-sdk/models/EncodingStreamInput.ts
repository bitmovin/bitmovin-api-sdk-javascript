import {map} from '../common/Mapper';
import EncodingStreamInputDetails from './EncodingStreamInputDetails';

/**
 * @export
 * @class EncodingStreamInput
 */
export default class EncodingStreamInput {
  constructor(obj: any) {
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
    this.details = map<EncodingStreamInputDetails>(obj.details, EncodingStreamInputDetails);
  }

  /**
   * Input id
   * @type {string}
   * @memberof EncodingStreamInput
   */
  public inputId?: string;
  /**
   * Path to media file
   * @type {string}
   * @memberof EncodingStreamInput
   */
  public inputPath?: string;
  /**
   * @type {EncodingStreamInputDetails}
   * @memberof EncodingStreamInput
   */
  public details: EncodingStreamInputDetails;
}
