import {map, mapArray} from '../common/Mapper';
import EncodingTemplate from './EncodingTemplate';
import SimpleEncodingVodJobOutput from './SimpleEncodingVodJobOutput';
import SimpleEncodingVodJobUrlInput from './SimpleEncodingVodJobUrlInput';

/**
 * @export
 * @class SimpleEncodingVodJobRequest
 */
export class SimpleEncodingVodJobRequest {
  /**
   * The template that will be used for the encoding.
   * @type {EncodingTemplate}
   * @memberof SimpleEncodingVodJobRequest
   */
  public encodingTemplate?: EncodingTemplate;

  /**
   * @type {SimpleEncodingVodJobUrlInput[]}
   * @memberof SimpleEncodingVodJobRequest
   */
  public inputs?: SimpleEncodingVodJobUrlInput[];

  /**
   * Please take a look at the [documentation](https://bitmovin.com/docs/encoding/articles/simple-encoding-api#inputs-outputs) (required)
   * @type {SimpleEncodingVodJobOutput[]}
   * @memberof SimpleEncodingVodJobRequest
   */
  public outputs?: SimpleEncodingVodJobOutput[];

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
    this.encodingTemplate = map(obj.encodingTemplate);
    this.inputs = mapArray(obj.inputs, SimpleEncodingVodJobUrlInput);
    this.outputs = mapArray(obj.outputs, SimpleEncodingVodJobOutput);
    this.name = map(obj.name);
  }
}

export default SimpleEncodingVodJobRequest;

