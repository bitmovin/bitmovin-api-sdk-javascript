import {map} from '../common/Mapper';
import BasicInputStream from './BasicInputStream';
import ConcatenationInputConfiguration from './ConcatenationInputConfiguration';

/**
 * @export
 * @class ConcatenationInputStream
 */
export default class ConcatenationInputStream extends BasicInputStream {
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
