import {map, mapArray} from '../common/Mapper';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class LocalInput
 */
export class LocalInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof LocalInput
   */
  public readonly type: InputType = InputType.LOCAL;

  /**
   * Path to your local storage (required)
   * @type {string}
   * @memberof LocalInput
   */
  public path?: string;

  constructor(obj?: Partial<LocalInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.path = map(obj.path);
  }
}

export default LocalInput;

