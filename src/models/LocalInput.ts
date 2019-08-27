import {map} from '../common/Mapper';
import Input from './Input';

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
  public type: 'LOCAL' = 'LOCAL';

  /**
   * Path to your local storage (required)
   * @type {string}
   * @memberof LocalInput
   */
  public path?: string;

  constructor(obj: Partial<LocalInput>) {
    super(obj);

    this.path = obj.path;
  }
}

export default LocalInput;

