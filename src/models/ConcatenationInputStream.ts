import {map} from '../common/Mapper';
import ConcatenationInputConfiguration from './ConcatenationInputConfiguration';
import InputStream from './InputStream';

/**
 * @export
 * @class ConcatenationInputStream
 */
export class ConcatenationInputStream extends InputStream {
  constructor(obj: any) {
    super(obj);
    this.concatenation = map<ConcatenationInputConfiguration>(obj.concatenation, ConcatenationInputConfiguration);
  }

  /**
   * Concatenation configuration for the output of this stream
   * @type {Array<ConcatenationInputConfiguration>}
   * @memberof ConcatenationInputStream
   */
  public concatenation?: Array<ConcatenationInputConfiguration>;
}

export default ConcatenationInputStream;

