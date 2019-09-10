import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import LogLevel from './LogLevel';

/**
 * @export
 * @class PrewarmEncoderSettings
 */
export class PrewarmEncoderSettings extends BitmovinResource {
  /**
   * Encoder Version to be prewarmed. Only one encoder of this version can be prewarmed per cluster. (required)
   * @type {string}
   * @memberof PrewarmEncoderSettings
   */
  public encoderVersion?: string;

  /**
   * The minimum number of prewarmed encoders of this Version (required)
   * @type {number}
   * @memberof PrewarmEncoderSettings
   */
  public minPrewarmed?: number;

  /**
   * The maximum number of concurrent prewarmed encoders of this Version
   * @type {number}
   * @memberof PrewarmEncoderSettings
   */
  public maxPrewarmed?: number;

  /**
   * @type {LogLevel}
   * @memberof PrewarmEncoderSettings
   */
  public logLevel?: LogLevel;

  constructor(obj?: Partial<PrewarmEncoderSettings>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encoderVersion = map(obj.encoderVersion);
    this.minPrewarmed = map(obj.minPrewarmed);
    this.maxPrewarmed = map(obj.maxPrewarmed);
    this.logLevel = map(obj.logLevel);
  }
}

export default PrewarmEncoderSettings;

