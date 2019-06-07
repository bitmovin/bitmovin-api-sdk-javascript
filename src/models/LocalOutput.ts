import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import Output from './Output';

/**
 * @export
 * @class LocalOutput
 */
export class LocalOutput extends Output {
  constructor(obj: any) {
    super(obj);
    this.path = map(obj.path);
  }

  /**
   * Path to your local storage
   * @type {string}
   * @memberof LocalOutput
   */
  public path: string;
}

export default LocalOutput;

