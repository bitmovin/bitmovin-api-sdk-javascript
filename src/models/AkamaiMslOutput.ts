import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import AkamaiMslStreamFormat from './AkamaiMslStreamFormat';
import AkamaiMslVersion from './AkamaiMslVersion';
import Output from './Output';
import OutputType from './OutputType';

/**
 * @export
 * @class AkamaiMslOutput
 */
export class AkamaiMslOutput extends Output {
  /**
   * Discriminator property for Output
   * @type {string}
   * @memberof AkamaiMslOutput
   */
  public readonly type: OutputType = OutputType.AKAMAI_MSL;

  /**
   * The Akamai stream ID (required)
   * @type {number}
   * @memberof AkamaiMslOutput
   */
  public streamId?: number;

  /**
   * The Akamai event name (required)
   * @type {string}
   * @memberof AkamaiMslOutput
   */
  public eventName?: string;

  /**
   * The stream format. Only DASH is supported at the moment. (required)
   * @type {AkamaiMslStreamFormat}
   * @memberof AkamaiMslOutput
   */
  public streamFormat?: AkamaiMslStreamFormat;

  /**
   * The Akamai MSL Version. Only MSL4 is supported at the moment. (required)
   * @type {AkamaiMslVersion}
   * @memberof AkamaiMslOutput
   */
  public mslVersion?: AkamaiMslVersion;

  constructor(obj?: Partial<AkamaiMslOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.streamId = map(obj.streamId);
    this.eventName = map(obj.eventName);
    this.streamFormat = map(obj.streamFormat);
    this.mslVersion = map(obj.mslVersion);
  }
}

export default AkamaiMslOutput;

