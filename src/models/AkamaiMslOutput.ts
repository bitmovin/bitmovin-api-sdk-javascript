import {map} from '../common/Mapper';
import AclEntry from './AclEntry';
import AkamaiMslStreamFormat from './AkamaiMslStreamFormat';
import AkamaiMslVersion from './AkamaiMslVersion';
import Output from './Output';

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
  public type: 'AKAMAI_MSL' = 'AKAMAI_MSL';

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
   * @type {AkamaiMslStreamFormat}
   * @memberof AkamaiMslOutput
   */
  public streamFormat?: AkamaiMslStreamFormat;

  /**
   * @type {AkamaiMslVersion}
   * @memberof AkamaiMslOutput
   */
  public mslVersion?: AkamaiMslVersion;

  constructor(obj: Partial<AkamaiMslOutput>) {
    super(obj);

    this.streamId = obj.streamId;
    this.eventName = obj.eventName;
    this.streamFormat = obj.streamFormat;
    this.mslVersion = obj.mslVersion;
  }
}

export default AkamaiMslOutput;

