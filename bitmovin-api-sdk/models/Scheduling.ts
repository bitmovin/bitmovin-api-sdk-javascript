import {map} from '../common/Mapper';

/**
 * @export
 * @class Scheduling
 */
export default class Scheduling {
  constructor(obj: any) {
    this.priority = map(obj.priority);
    this.prewarmedInstancePoolIds = map(obj.prewarmedInstancePoolIds);
  }

  /**
   * Specify the priority of this encoding (0 - 100). Higher numbers mean higher priority. Default is 50.
   * @type {number}
   * @memberof Scheduling
   */
  public priority?: number;
  /**
   * List of prewarmed Instance pools. If set, prewarmed instances from pools with these IDs will be used for the Encoding if available. The pool IDs will be tried in the order in which they are passed.
   * @type {Array<string>}
   * @memberof Scheduling
   */
  public prewarmedInstancePoolIds?: Array<string>;
}
