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
   * Discriminator property for Filter
   * @type {string}
   * @memberof InterlaceFilter
   */
  public type: 'INTERLACE' = 'INTERLACE';

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

    this.mode = obj.mode;
    this.verticalLowPassFilteringMode = obj.verticalLowPassFilteringMode;
  }
}

export default InterlaceFilter;

