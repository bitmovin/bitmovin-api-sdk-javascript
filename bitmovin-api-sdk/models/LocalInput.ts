import {map} from '../common/Mapper';
import Input from './Input';

/**
 * @export
 * @class LocalInput
 */
export default class LocalInput extends Input {
  constructor(obj: any) {
    super(obj);
    this.path = map(obj.path);
  }

  /**
   * Path to your local storage
   * @type {string}
   * @memberof LocalInput
   */
  public path: string;
}
