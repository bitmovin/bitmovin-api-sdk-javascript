import {map} from '../common/Mapper';
import ConcatenationInputConfiguration from './ConcatenationInputConfiguration';
import InputStream from './InputStream';

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
  public type: 'CONCATENATION' = 'CONCATENATION';

  /**
   * Concatenation configuration for the output of this stream
   * @type {ConcatenationInputConfiguration[]}
   * @memberof ConcatenationInputStream
   */
  public concatenation?: ConcatenationInputConfiguration[];

  constructor(obj: Partial<ConcatenationInputStream>) {
    super(obj);

    this.concatenation = map<ConcatenationInputConfiguration>(obj.concatenation, ConcatenationInputConfiguration) || [];
  }
}

export default ConcatenationInputStream;

