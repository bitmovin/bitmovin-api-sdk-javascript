import {map, mapArray} from '../common/Mapper';
import Filter from './Filter';
import FilterType from './FilterType';

/**
 * @export
 * @class ConformFilter
 */
export class ConformFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof ConformFilter
   */
  public readonly type: FilterType = FilterType.CONFORM;

  /**
   * The FPS the input should be changed to.
   * @type {number}
   * @memberof ConformFilter
   */
  public targetFps?: number;

  constructor(obj?: Partial<ConformFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.targetFps = map(obj.targetFps);
  }
}

export default ConformFilter;

