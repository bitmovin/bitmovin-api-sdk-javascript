import {map} from '../common/Mapper';

/**
 * @export
 * @class InsertableContentInput
 */
export class InsertableContentInput {
  /**
   * Id of the input hosting the video file (required)
   * @type {string}
   * @memberof InsertableContentInput
   */
  public inputId?: string;

  /**
   * Path to the file on the input (required)
   * @type {string}
   * @memberof InsertableContentInput
   */
  public inputPath?: string;

  /**
   * Description of this input
   * @type {string}
   * @memberof InsertableContentInput
   */
  public description?: string;

  constructor(obj: Partial<InsertableContentInput>) {

    this.inputId = obj.inputId;
    this.inputPath = obj.inputPath;
    this.description = obj.description;
  }
}

export default InsertableContentInput;

