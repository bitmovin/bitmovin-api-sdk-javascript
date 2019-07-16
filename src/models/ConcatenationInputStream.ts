import {map} from '../common/Mapper';
import ConcatenationInputConfiguration from './ConcatenationInputConfiguration';
import InputStream from './InputStream';

/**
 * @export
 * @class ConcatenationInputStream
 */
export class ConcatenationInputStream extends InputStream {
  /**
   * Concatenation configuration for the output of this stream
   * @type {ConcatenationInputConfiguration[]}
   * @memberof ConcatenationInputStream
   */
  public concatenation?: ConcatenationInputConfiguration[];

  constructor(obj: Partial<ConcatenationInputStream>) {
    super(obj);
    this.concatenation = map<ConcatenationInputConfiguration>(obj.concatenation, ConcatenationInputConfiguration);
  }
}

export default ConcatenationInputStream;

