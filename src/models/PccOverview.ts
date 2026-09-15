import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PccOverview
 */
export class PccOverview {
  /**
   * Number of selected cells, one per device pool and codec/protection combination. (required)
   * @type {number}
   * @memberof PccOverview
   */
  public total?: number;

  /**
   * Selected cells with a device-answering verdict, including refusals. (required)
   * @type {number}
   * @memberof PccOverview
   */
  public answered?: number;

  /**
   * Selected cells that played successfully. (required)
   * @type {number}
   * @memberof PccOverview
   */
  public played?: number;

  constructor(obj?: Partial<PccOverview>) {
    if(!obj) {
      return;
    }
    this.total = map(obj.total);
    this.answered = map(obj.answered);
    this.played = map(obj.played);
  }
}

export default PccOverview;

