import {map, mapArray} from '../common/Mapper';
import DeinterlaceAutoEnable from './DeinterlaceAutoEnable';
import DeinterlaceFrameSelectionMode from './DeinterlaceFrameSelectionMode';
import DeinterlaceMode from './DeinterlaceMode';
import Filter from './Filter';
import FilterType from './FilterType';
import PictureFieldParity from './PictureFieldParity';

/**
 * @export
 * @class DeinterlaceFilter
 */
export class DeinterlaceFilter extends Filter {
  /**
   * Discriminator property for Filter
   * @type {string}
   * @memberof DeinterlaceFilter
   */
  public type: FilterType.DEINTERLACE = FilterType.DEINTERLACE;

  /**
   * @type {PictureFieldParity}
   * @memberof DeinterlaceFilter
   */
  public parity?: PictureFieldParity;

  /**
   * @type {DeinterlaceMode}
   * @memberof DeinterlaceFilter
   */
  public mode?: DeinterlaceMode;

  /**
   * @type {DeinterlaceFrameSelectionMode}
   * @memberof DeinterlaceFilter
   */
  public frameSelectionMode?: DeinterlaceFrameSelectionMode;

  /**
   * @type {DeinterlaceAutoEnable}
   * @memberof DeinterlaceFilter
   */
  public autoEnable?: DeinterlaceAutoEnable;

  constructor(obj?: Partial<DeinterlaceFilter>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.parity = map(obj.parity);
    this.mode = map(obj.mode);
    this.frameSelectionMode = map(obj.frameSelectionMode);
    this.autoEnable = map(obj.autoEnable);
  }
}

export default DeinterlaceFilter;

