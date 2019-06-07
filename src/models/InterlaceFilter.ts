import {map} from '../common/Mapper';
import Filter from './Filter';
import InterlaceMode from './InterlaceMode';
import VerticalLowPassFilteringMode from './VerticalLowPassFilteringMode';

/**
 * @export
 * @class InterlaceFilter
 */
export class InterlaceFilter extends Filter {
  constructor(obj: any) {
    super(obj);
    this.mode = map(obj.mode);
    this.verticalLowPassFilteringMode = map(obj.verticalLowPassFilteringMode);
  }

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
}

export default InterlaceFilter;

