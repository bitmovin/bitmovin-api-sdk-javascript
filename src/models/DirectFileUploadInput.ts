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

  constructor(obj?: Partial<DirectFileUploadInput>) {
    super(obj);
    if(!obj) {
      return;
    }
  }
}

export default DirectFileUploadInput;

