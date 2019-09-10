import {map, mapArray} from '../common/Mapper';
import IgnoredBy from './IgnoredBy';

/**
 * @export
 * @class Ignoring
 */
export class Ignoring {
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

  constructor(obj?: Partial<Ignoring>) {
    if(!obj) {
      return;
    }
    this.ignoredBy = map(obj.ignoredBy);
    this.ignoredByDescription = map(obj.ignoredByDescription);
  }
}

export default Ignoring;

