import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class LocalInput
 */
export class LocalInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.path = map(obj.path);
  }

  /**
   * Path to your local storage (required)
   * @type {string}
   * @memberof LocalInput
   */
  public path: string;
}

export default LocalInput;

