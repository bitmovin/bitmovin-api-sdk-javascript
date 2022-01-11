import {map, mapArray} from '../common/Mapper';
import ConcatenationInputConfiguration from './ConcatenationInputConfiguration';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class ConcatenationInputStream
 */
export class ConcatenationInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof ConcatenationInputStream
   */
  public readonly type: InputStreamType = InputStreamType.CONCATENATION;

  /**
   * Concatenation configuration for the output of this stream
   * @type {ConcatenationInputConfiguration[]}
   * @memberof ConcatenationInputStream
   */
  public concatenation?: ConcatenationInputConfiguration[];

  constructor(obj?: Partial<ConcatenationInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.concatenation = mapArray(obj.concatenation, ConcatenationInputConfiguration);
  }
}

export default ConcatenationInputStream;

