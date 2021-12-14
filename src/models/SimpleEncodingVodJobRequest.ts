import {map, mapArray} from '../common/Mapper';
import SimpleEncodingVodJobUrlInput from './SimpleEncodingVodJobUrlInput';
import SimpleEncodingVodJobUrlOutput from './SimpleEncodingVodJobUrlOutput';

/**
 * @export
 * @class SimpleEncodingVodJobRequest
 */
export class SimpleEncodingVodJobRequest {
  /**
   * @type {SimpleEncodingVodJobUrlInput[]}
   * @memberof SimpleEncodingVodJobRequest
   */
  public inputs?: SimpleEncodingVodJobUrlInput[];

  /**
   * @type {SimpleEncodingVodJobUrlOutput[]}
   * @memberof SimpleEncodingVodJobRequest
   */
  public outputs?: SimpleEncodingVodJobUrlOutput[];

  /**
   * This property will be used for naming the encoding and the manifests.
   * @type {string}
   * @memberof SimpleEncodingVodJobRequest
   */
  public name?: string;

  constructor(obj?: Partial<SimpleEncodingVodJobRequest>) {
    if(!obj) {
      return;
    }
    this.inputs = mapArray(obj.inputs, SimpleEncodingVodJobUrlInput);
    this.outputs = mapArray(obj.outputs, SimpleEncodingVodJobUrlOutput);
    this.name = map(obj.name);
  }
}

export default SimpleEncodingVodJobRequest;

