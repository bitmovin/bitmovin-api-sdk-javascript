import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class KantarWatermark
 */
export class KantarWatermark extends BitmovinResponse {
  /**
   * Username used to authenticate with the Kantar watermarking service. (required)
   * @type {string}
   * @memberof KantarWatermark
   */
  public login?: string;

  /**
   * Password associated with the provided login for authentication. (required)
   * @type {string}
   * @memberof KantarWatermark
   */
  public password?: string;

  /**
   * Identifier of the Kantar license to be used when processing the audio watermark. (required)
   * @type {number}
   * @memberof KantarWatermark
   */
  public licenseId?: number;

  /**
   * Name of the distribution channel associated with the audio content being watermarked. (required)
   * @type {string}
   * @memberof KantarWatermark
   */
  public channelName?: string;

  /**
   * Unique reference or identifier for the audio content that will be processed. (required)
   * @type {string}
   * @memberof KantarWatermark
   */
  public contentReference?: string;

  /**
   * URL of the Kantar server endpoint used to apply or validate the audio watermark. (required)
   * @type {string}
   * @memberof KantarWatermark
   */
  public serverUrl?: string;

  /**
   * The outputs where the processing report should be delivered. (required)
   * @type {EncodingOutput[]}
   * @memberof KantarWatermark
   */
  public reportOutputs?: EncodingOutput[];

  constructor(obj?: Partial<KantarWatermark>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.login = map(obj.login);
    this.password = map(obj.password);
    this.licenseId = map(obj.licenseId);
    this.channelName = map(obj.channelName);
    this.contentReference = map(obj.contentReference);
    this.serverUrl = map(obj.serverUrl);
    this.reportOutputs = mapArray(obj.reportOutputs, EncodingOutput);
  }
}

export default KantarWatermark;

