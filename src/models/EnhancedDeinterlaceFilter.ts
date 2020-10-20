import {map, mapArray} from '../common/Mapper';
import EnhancedDeinterlaceAutoEnable from './EnhancedDeinterlaceAutoEnable';
import EnhancedDeinterlaceMode from './EnhancedDeinterlaceMode';
import EnhancedDeinterlaceParity from './EnhancedDeinterlaceParity';
import Filter from './Filter';
import FilterType from './FilterType';

/**
 * @export
 * @class EnhancedDeinterlaceFilter
 */
export class EnhancedDeinterlaceFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof EnhancedDeinterlaceFilter
   */
  public type: FilterType.ENHANCED_DEINTERLACE = FilterType.ENHANCED_DEINTERLACE;

  /**
   * @type {EnhancedDeinterlaceParity}
   * @memberof EnhancedDeinterlaceFilter
   */
  public parity?: EnhancedDeinterlaceParity;

  /**
   * @type {EnhancedDeinterlaceMode}
   * @memberof EnhancedDeinterlaceFilter
   */
  public mode?: EnhancedDeinterlaceMode;

  /**
   * @type {EnhancedDeinterlaceAutoEnable}
   * @memberof EnhancedDeinterlaceFilter
   */
  public autoEnable?: EnhancedDeinterlaceAutoEnable;

  constructor(obj?: Partial<EnhancedDeinterlaceFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.parity = map(obj.parity);
    this.mode = map(obj.mode);
    this.autoEnable = map(obj.autoEnable);
  }
}

export default EnhancedDeinterlaceFilter;

