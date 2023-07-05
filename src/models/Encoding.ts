import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CloudRegion from './CloudRegion';
import EncodingMode from './EncodingMode';
import EncodingType from './EncodingType';
import InfrastructureSettings from './InfrastructureSettings';
import LiveOptionsType from './LiveOptionsType';
import Status from './Status';

/**
 * @export
 * @class Encoding
 */
export class Encoding extends BitmovinResource {
  /**
   * Type of the encoding
   * @type {EncodingType}
   * @memberof Encoding
   */
  public type?: EncodingType;

  /**
   * Timestamp when the encoding was started, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Encoding
   */
  public startedAt?: Date;

  /**
   * Timestamp when the encoding status changed to \"QUEUED\", returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Encoding
   */
  public queuedAt?: Date;

  /**
   * Timestamp when the encoding status changed to \"RUNNING\", returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Encoding
   */
  public runningAt?: Date;

  /**
   * Timestamp when the encoding status changed to 'FINISHED', 'ERROR', 'CANCELED', or 'TRANSFER_ERROR', returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ  Note that this timestamp might be inaccurate for encodings which ran prior to the [1.50.0 REST API release](https://bitmovin.com/docs/encoding/changelogs/rest). 
   * @type {Date}
   * @memberof Encoding
   */
  public finishedAt?: Date;

  /**
   * Timestamp when the encoding status changed to 'ERROR', returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ  Note that this timestamp is deprecated and is equivalent to finishedAt in case of an 'ERROR'. 
   * @type {Date}
   * @memberof Encoding
   */
  public errorAt?: Date;

  /**
   * Progress of the encoding in percent
   * @type {number}
   * @memberof Encoding
   */
  public progress?: number;

  /**
   * @type {CloudRegion}
   * @memberof Encoding
   */
  public cloudRegion?: CloudRegion;

  /**
   * Specify a list of regions which are used in case the preferred region is down. Currently there are several restrictions. - The region has to be specific or AUTO - The region has to be for the same cloud provider as the default one - You can only configure at most 3 fallback regions 
   * @type {CloudRegion[]}
   * @memberof Encoding
   */
  public fallbackCloudRegions?: CloudRegion[];

  /**
   * Version of the encoder
   * @type {string}
   * @memberof Encoding
   */
  public encoderVersion?: string;

  /**
   * @type {InfrastructureSettings}
   * @memberof Encoding
   */
  public infrastructure?: InfrastructureSettings;

  /**
   * Specify an ID of a Static IP infrastructure resource this encoding should use. A Static IP cannot be used by multiple encodings at once. The encoding will go to an error state if the Static IP is already in use. This is currently only supported for live encodings.
   * @type {string}
   * @memberof Encoding
   */
  public staticIpId?: string;

  /**
   * After the encoding has been started, this will contain the encoder version that was actually used. Especially useful when starting an encoding with a version tag like STABLE or BETA.
   * @type {string}
   * @memberof Encoding
   */
  public selectedEncoderVersion?: string;

  /**
   * After the encoding has been started, this will contain the encoding mode that was actually used. Especially useful when `encodingMode` was not set explicitly or set to STANDARD (which translates to one of the other possible values on encoding start).
   * @type {EncodingMode}
   * @memberof Encoding
   */
  public selectedEncodingMode?: EncodingMode;

  /**
   * After the encoding has been started, this will contain the cloud region that was actually used. This will differ from cloudRegion if cloudRegion was set to an unspecific region (e.g. 'AUTO')
   * @type {CloudRegion}
   * @memberof Encoding
   */
  public selectedCloudRegion?: CloudRegion;

  /**
   * The current status of the encoding.
   * @type {Status}
   * @memberof Encoding
   */
  public status?: Status;

  /**
   * You may pass a list of groups associated with this encoding. This will enable you to group results in the statistics resource
   * @type {string[]}
   * @memberof Encoding
   */
  public labels?: string[];

  /**
   * The chosen live option type of the live encoding
   * @type {LiveOptionsType}
   * @memberof Encoding
   */
  public liveOptionsType?: LiveOptionsType;

  constructor(obj?: Partial<Encoding>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
    this.startedAt = map(obj.startedAt, Date);
    this.queuedAt = map(obj.queuedAt, Date);
    this.runningAt = map(obj.runningAt, Date);
    this.finishedAt = map(obj.finishedAt, Date);
    this.errorAt = map(obj.errorAt, Date);
    this.progress = map(obj.progress);
    this.cloudRegion = map(obj.cloudRegion);
    this.fallbackCloudRegions = mapArray(obj.fallbackCloudRegions);
    this.encoderVersion = map(obj.encoderVersion);
    this.infrastructure = map(obj.infrastructure, InfrastructureSettings);
    this.staticIpId = map(obj.staticIpId);
    this.selectedEncoderVersion = map(obj.selectedEncoderVersion);
    this.selectedEncodingMode = map(obj.selectedEncodingMode);
    this.selectedCloudRegion = map(obj.selectedCloudRegion);
    this.status = map(obj.status);
    this.labels = mapArray(obj.labels);
    this.liveOptionsType = map(obj.liveOptionsType);
  }
}

export default Encoding;

