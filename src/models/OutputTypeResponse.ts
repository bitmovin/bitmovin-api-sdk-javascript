import {map} from '../common/Mapper';
import OutputType from './OutputType';

/**
 * @export
 * @class OutputTypeResponse
 */
export class OutputTypeResponse {
  /**
   * The type of the output
   * @type {OutputType}
   * @memberof OutputTypeResponse
   */
  public type?: OutputType;

  constructor(obj: Partial<OutputTypeResponse>) {

    this.type = obj.type;
  }
}

export default OutputTypeResponse;

