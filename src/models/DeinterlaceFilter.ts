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
   * Discriminator property for Filter
   * @type {string}
   * @memberof DeinterlaceFilter
   */
  public type: 'DEINTERLACE' = 'DEINTERLACE';

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

    this.parity = obj.parity;
    this.mode = obj.mode;
    this.frameSelectionMode = obj.frameSelectionMode;
  }
}

export default DeinterlaceFilter;

