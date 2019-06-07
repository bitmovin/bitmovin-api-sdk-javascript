import {map} from '../common/Mapper';
import OutputType from './OutputType';

/**
 * @export
 * @class OutputTypeResponse
 */
export class OutputTypeResponse {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * The type of the output
   * @type {OutputType}
   * @memberof OutputTypeResponse
   */
  public type?: OutputType;
}

export default OutputTypeResponse;

