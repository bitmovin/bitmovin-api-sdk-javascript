import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<OutputTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default OutputTypeResponse;

