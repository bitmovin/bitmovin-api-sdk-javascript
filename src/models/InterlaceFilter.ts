import {map} from '../common/Mapper';
import Filter from './Filter';
import InterlaceMode from './InterlaceMode';
import VerticalLowPassFilteringMode from './VerticalLowPassFilteringMode';

/**
 * @export
 * @class InterlaceFilter
 */
export class InterlaceFilter extends Filter {
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

  constructor(obj: Partial<InterlaceFilter>) {
    super(obj);
    this.mode = map(obj.mode);
    this.verticalLowPassFilteringMode = map(obj.verticalLowPassFilteringMode);
  }
}

export default InterlaceFilter;

