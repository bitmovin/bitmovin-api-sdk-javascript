import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class Scheduling
 */
export class Scheduling {
  /**
   * Specify the priority of this encoding (0 - 100). Higher numbers mean higher priority. Default is 50.
   * @type {number}
   * @memberof Scheduling
   */
  public priority?: number;

  /**
   * List of prewarmed encoder pools. If set, prewarmed encoders from pools with these IDs will be used for the encoding if available. The pool IDs will be tried in the order in which they are passed.
   * @type {string[]}
   * @memberof Scheduling
   */
  public prewarmedEncoderPoolIds?: string[];

  constructor(obj?: Partial<Scheduling>) {
    if(!obj) {
      return;
    }
    this.priority = map(obj.priority);
    this.prewarmedEncoderPoolIds = mapArray(obj.prewarmedEncoderPoolIds);
  }
}

export default Scheduling;

