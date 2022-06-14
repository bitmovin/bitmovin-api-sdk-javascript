import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class DirectFileUploadInput
 */
export class DirectFileUploadInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof DirectFileUploadInput
   */
  public readonly type: InputType = InputType.DIRECT_FILE_UPLOAD;

  /**
   * The URL to be used for a file upload with HTTP PUT. Expires after 5 minutes.
   * @type {string}
   * @memberof DirectFileUploadInput
   */
  public uploadUrl?: string;

  constructor(obj?: Partial<DirectFileUploadInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.uploadUrl = map(obj.uploadUrl);
  }
}

export default DirectFileUploadInput;

