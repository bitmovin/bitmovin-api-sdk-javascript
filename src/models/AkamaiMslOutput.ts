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
  constructor(obj: any) {
    super(obj);
    this.streamId = map(obj.streamId);
    this.eventName = map(obj.eventName);
    this.streamFormat = map(obj.streamFormat);
    this.mslVersion = map(obj.mslVersion);
  }

  /**
   * The Akamai stream ID (required)
   * @type {number}
   * @memberof AkamaiMslOutput
   */
  public streamId: number;
  /**
   * The Akamai event name (required)
   * @type {string}
   * @memberof AkamaiMslOutput
   */
  public eventName: string;
  /**
   * @type {AkamaiMslStreamFormat}
   * @memberof AkamaiMslOutput
   */
  public streamFormat: AkamaiMslStreamFormat;
  /**
   * @type {AkamaiMslVersion}
   * @memberof AkamaiMslOutput
   */
  public mslVersion: AkamaiMslVersion;
}

export default AkamaiMslOutput;

