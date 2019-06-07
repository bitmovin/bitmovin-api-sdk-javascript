import {map} from '../common/Mapper';

/**
 * @export
 * @class InputPath
 */
export class InputPath {
  constructor(obj: any) {
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
  }

  /**
   * Id of input
   * @type {string}
   * @memberof InputPath
   */
  public inputId: string;
  /**
   * Path to media file
   * @type {string}
   * @memberof InputPath
   */
  public inputPath: string;
}

export default InputPath;

