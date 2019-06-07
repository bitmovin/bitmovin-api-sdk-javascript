import {map} from '../common/Mapper';
import IgnoredBy from './IgnoredBy';

/**
 * @export
 * @class Ignoring
 */
export class Ignoring {
  constructor(obj: any) {
    this.ignoredBy = map(obj.ignoredBy);
    this.ignoredByDescription = map(obj.ignoredByDescription);
  }

  /**
   * @type {IgnoredBy}
   * @memberof Ignoring
   */
  public ignoredBy?: IgnoredBy;
  /**
   * Describes why ignoredBy has been set to its current value.
   * @type {string}
   * @memberof Ignoring
   */
  public ignoredByDescription?: string;
}

export default Ignoring;

