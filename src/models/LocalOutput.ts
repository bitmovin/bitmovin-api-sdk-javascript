import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';
import OutputType from './OutputType';

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
  public readonly type: OutputType = OutputType.LOCAL;

  /**
   * Path to your local storage (required)
   * @type {string}
   * @memberof LocalOutput
   */
  public path?: string;

  constructor(obj?: Partial<LocalOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.path = map(obj.path);
  }
}

export default LocalOutput;

