import {map, mapArray} from '../common/Mapper';
import Filter from './Filter';
import FilterType from './FilterType';
import InterlaceMode from './InterlaceMode';
import VerticalLowPassFilteringMode from './VerticalLowPassFilteringMode';

/**
 * @export
 * @class InterlaceFilter
 */
export class InterlaceFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof InterlaceFilter
   */
  public type: FilterType.INTERLACE = FilterType.INTERLACE;

  /**
   * @type {InterlaceMode}
   * @memberof InterlaceFilter
   */
  public mode?: InterlaceMode;

  /**
   * @type {VerticalLowPassFilteringMode}
   * @memberof InterlaceFilter
   */
  public verticalLowPassFilteringMode?: VerticalLowPassFilteringMode;

  constructor(obj?: Partial<InterlaceFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.mode = map(obj.mode);
    this.verticalLowPassFilteringMode = map(obj.verticalLowPassFilteringMode);
  }
}

export default InterlaceFilter;

