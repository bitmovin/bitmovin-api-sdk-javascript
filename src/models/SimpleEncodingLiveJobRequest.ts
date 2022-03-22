import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveCloudRegion from './SimpleEncodingLiveCloudRegion';
import SimpleEncodingLiveJobInput from './SimpleEncodingLiveJobInput';
import SimpleEncodingLiveJobUrlOutput from './SimpleEncodingLiveJobUrlOutput';

/**
 * @export
 * @class SimpleEncodingLiveJobRequest
 */
export class SimpleEncodingLiveJobRequest {
  /**
   * @type {SimpleEncodingLiveJobInput}
   * @memberof SimpleEncodingLiveJobRequest
   */
  public input?: SimpleEncodingLiveJobInput;

  /**
   * output of the live encoding job (required)
   * @type {SimpleEncodingLiveJobUrlOutput[]}
   * @memberof SimpleEncodingLiveJobRequest
   */
  public outputs?: SimpleEncodingLiveJobUrlOutput[];

  /**
   * The cloud region that will be used for the live encoding. This value has to be set.
   * @type {SimpleEncodingLiveCloudRegion}
   * @memberof SimpleEncodingLiveJobRequest
   */
  public cloudRegion?: SimpleEncodingLiveCloudRegion;

  /**
   * This property will be used for naming the encoding.
   * @type {string}
   * @memberof SimpleEncodingLiveJobRequest
   */
  public name?: string;

  constructor(obj?: Partial<SimpleEncodingLiveJobRequest>) {
    if(!obj) {
      return;
    }
    this.input = map(obj.input, SimpleEncodingLiveJobInput);
    this.outputs = mapArray(obj.outputs, SimpleEncodingLiveJobUrlOutput);
    this.cloudRegion = map(obj.cloudRegion);
    this.name = map(obj.name);
  }
}

export default SimpleEncodingLiveJobRequest;

