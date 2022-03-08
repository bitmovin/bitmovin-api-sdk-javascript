import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveInputAspectRatio from './SimpleEncodingLiveInputAspectRatio';
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

  /**
   * The aspect ratio of the input video stream
   * @type {SimpleEncodingLiveInputAspectRatio}
   * @memberof SimpleEncodingLiveJobInput
   */
  public inputAspectRatio?: SimpleEncodingLiveInputAspectRatio;

  constructor(obj?: Partial<SimpleEncodingLiveJobInput>) {
    if(!obj) {
      return;
    }
    this.inputType = map(obj.inputType);
    this.inputAspectRatio = map(obj.inputAspectRatio);
  }
}

export default SimpleEncodingLiveJobInput;

