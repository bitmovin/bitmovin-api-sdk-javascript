import {map, mapArray} from '../common/Mapper';
import SimpleEncodingLiveCloudRegion from './SimpleEncodingLiveCloudRegion';
import SimpleEncodingLiveJobInput from './SimpleEncodingLiveJobInput';
import SimpleEncodingLiveJobOutput from './SimpleEncodingLiveJobOutput';
import SimpleEncodingLiveProfile from './SimpleEncodingLiveProfile';

/**
 * @export
 * @class SimpleEncodingLiveJobRequest
 */
export class SimpleEncodingLiveJobRequest {
  /**
   * The profile that will be used for the live encoding.
   * @type {SimpleEncodingLiveProfile}
   * @memberof SimpleEncodingLiveJobRequest
   */
  public encodingProfile?: SimpleEncodingLiveProfile;

  /**
   * Please take a look at the [documentation](https://bitmovin.com/docs/encoding/articles/simple-encoding-api-live#inputs) (required)
   * @type {SimpleEncodingLiveJobInput}
   * @memberof SimpleEncodingLiveJobRequest
   */
  public input?: SimpleEncodingLiveJobInput;

  /**
   * Please take a look at the [documentation](https://bitmovin.com/docs/encoding/articles/simple-encoding-api-live#outputs) (required)
   * @type {SimpleEncodingLiveJobOutput[]}
   * @memberof SimpleEncodingLiveJobRequest
   */
  public outputs?: SimpleEncodingLiveJobOutput[];

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
    this.encodingProfile = map(obj.encodingProfile);
    this.input = map(obj.input, SimpleEncodingLiveJobInput);
    this.outputs = mapArray(obj.outputs, SimpleEncodingLiveJobOutput);
    this.cloudRegion = map(obj.cloudRegion);
    this.name = map(obj.name);
  }
}

export default SimpleEncodingLiveJobRequest;

