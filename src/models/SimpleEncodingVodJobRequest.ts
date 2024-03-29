import {map, mapArray} from '../common/Mapper';
import EncodingTemplate from './EncodingTemplate';
import SimpleEncodingVodJobInput from './SimpleEncodingVodJobInput';
import SimpleEncodingVodJobOptions from './SimpleEncodingVodJobOptions';
import SimpleEncodingVodJobOutput from './SimpleEncodingVodJobOutput';

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
   * Please take a look at the [documentation](https://bitmovin.com/docs/encoding/articles/simple-encoding-api#inputs-outputs) (required)
   * @type {SimpleEncodingVodJobInput[]}
   * @memberof SimpleEncodingVodJobRequest
   */
  public inputs?: SimpleEncodingVodJobInput[];

  /**
   * Please take a look at the [documentation](https://bitmovin.com/docs/encoding/articles/simple-encoding-api#inputs-outputs) (required)
   * @type {SimpleEncodingVodJobOutput[]}
   * @memberof SimpleEncodingVodJobRequest
   */
  public outputs?: SimpleEncodingVodJobOutput[];

  /**
   * Options to customize the Simple Encoding Job
   * @type {SimpleEncodingVodJobOptions}
   * @memberof SimpleEncodingVodJobRequest
   */
  public options?: SimpleEncodingVodJobOptions;

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
    this.inputs = mapArray(obj.inputs, SimpleEncodingVodJobInput);
    this.outputs = mapArray(obj.outputs, SimpleEncodingVodJobOutput);
    this.options = map(obj.options, SimpleEncodingVodJobOptions);
    this.name = map(obj.name);
  }
}

export default SimpleEncodingVodJobRequest;

