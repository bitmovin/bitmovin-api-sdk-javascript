import {map, mapArray} from '../common/Mapper';
import EsamDirection from './EsamDirection';

/**
 * ESAM condition following the SCTE-250 standard with timing offset and directional marker (OUT/IN) for signaling content boundaries
 * @export
 * @class EsamCondition
 */
export class EsamCondition {
  /**
   * The offset from the matched signal when this condition applies in ISO 8601 duration format, accurate to milliseconds (required)
   * @type {string}
   * @memberof EsamCondition
   */
  public offset?: string;

  /**
   * Direction marker indicating the boundary type (OUT for start, IN for end) (required)
   * @type {EsamDirection}
   * @memberof EsamCondition
   */
  public direction?: EsamDirection;

  constructor(obj?: Partial<EsamCondition>) {
    if(!obj) {
      return;
    }
    this.offset = map(obj.offset);
    this.direction = map(obj.direction);
  }
}

export default EsamCondition;

