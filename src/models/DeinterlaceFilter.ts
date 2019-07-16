import {map} from '../common/Mapper';
import DeinterlaceFrameSelectionMode from './DeinterlaceFrameSelectionMode';
import DeinterlaceMode from './DeinterlaceMode';
import Filter from './Filter';
import PictureFieldParity from './PictureFieldParity';

/**
 * @export
 * @class DeinterlaceFilter
 */
export class DeinterlaceFilter extends Filter {
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

  constructor(obj: Partial<DeinterlaceFilter>) {
    super(obj);
    this.parity = map(obj.parity);
    this.mode = map(obj.mode);
    this.frameSelectionMode = map(obj.frameSelectionMode);
  }
}

export default DeinterlaceFilter;

