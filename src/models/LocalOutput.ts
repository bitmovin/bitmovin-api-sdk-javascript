import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';

/**
 * @export
 * @class LocalOutput
 */
export class LocalOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof LocalOutput
   */
  public type: 'LOCAL' = 'LOCAL';

  /**
   * Path to your local storage (required)
   * @type {string}
   * @memberof LocalOutput
   */
  public path?: string;

  constructor(obj: Partial<LocalOutput>) {
    super(obj);

    this.path = obj.path;
  }
}

export default LocalOutput;

