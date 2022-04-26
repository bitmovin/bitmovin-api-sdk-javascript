import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveJobInputType from './SimpleEncodingLiveJobInputType';

/**
 * @export
 * @class SimpleEncodingLiveJobInput
 */
export class SimpleEncodingLiveJobInput {
  /**
   * Defines which protocol is being used as input of the live stream. 
   * @type {SimpleEncodingLiveJobInputType}
   * @memberof SimpleEncodingLiveJobInput
   */
  public inputType?: SimpleEncodingLiveJobInputType;

  constructor(obj?: Partial<SimpleEncodingLiveJobInput>) {
    if(!obj) {
      return;
    }
    this.inputType = map(obj.inputType);
  }
}

export default SimpleEncodingLiveJobInput;

