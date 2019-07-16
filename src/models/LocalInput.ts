import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class LocalInput
 */
export class LocalInput extends Input {
  /**
   * Path to your local storage (required)
   * @type {string}
   * @memberof LocalInput
   */
  public path: string;

  constructor(obj: Partial<LocalInput>) {
    super(obj);
    this.path = map(obj.path);
  }
}

export default LocalInput;

