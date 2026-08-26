import {map, mapArray} from '../common/Mapper';
import AclEntry from './AclEntry';
import AkamaiMslStreamFormat from './AkamaiMslStreamFormat';
import AkamaiMslVersion from './AkamaiMslVersion';
import MslPublishingAuthentication from './MslPublishingAuthentication';
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
   * - DASH: configure the Encoding with fMP4 or CMAF muxings and a DASH manifest. - HLS: configure the Encoding with TS muxings and an HLS manifest. - CMAF: configure the Encoding with fMP4 or CMAF muxings with both DASH and HLS manifests. (required)
   * @type {AkamaiMslStreamFormat}
   * @memberof AkamaiMslOutput
   */
  public streamFormat?: AkamaiMslStreamFormat;

  /**
   * The Akamai MSL Version. MSL4 and MSL5 are supported. (required)
   * @type {AkamaiMslVersion}
   * @memberof AkamaiMslOutput
   */
  public mslVersion?: AkamaiMslVersion;

  /**
   * MSL5 only. HTTP Digest publishing credentials. Sending this field with `mslVersion: MSL4` is rejected. Credentials (username, password) are write-only and not returned in responses. 
   * @type {MslPublishingAuthentication}
   * @memberof AkamaiMslOutput
   */
  public publishingAuthentication?: MslPublishingAuthentication;

  constructor(obj?: Partial<AkamaiMslOutput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.streamId = map(obj.streamId);
    this.eventName = map(obj.eventName);
    this.streamFormat = map(obj.streamFormat);
    this.mslVersion = map(obj.mslVersion);
    this.publishingAuthentication = map(obj.publishingAuthentication, MslPublishingAuthentication);
  }
}

export default AkamaiMslOutput;

