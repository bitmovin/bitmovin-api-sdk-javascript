import {map} from '../common/Mapper';

/**
 * @export
 * @class InputPath
 */
export class InputPath {
  /**
   * Id of input (required)
   * @type {string}
   * @memberof InputPath
   */
  public inputId?: string;

  /**
   * Path to media file (required)
   * @type {string}
   * @memberof InputPath
   */
  public inputPath?: string;

  constructor(obj: Partial<InputPath>) {

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
  }
}

export default InputPath;

