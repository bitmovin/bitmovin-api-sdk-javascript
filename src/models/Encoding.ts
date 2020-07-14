import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CloudRegion from './CloudRegion';
import EncodingMode from './EncodingMode';
import InfrastructureSettings from './InfrastructureSettings';
import Status from './Status';

/**
 * @export
 * @class Encoding
 */
export class Encoding extends BitmovinResource {
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
   * Define an external infrastructure to run the encoding on. Note If you set this value, the `cloudRegion` must be 'EXTERNAL'.
   * @type {string}
   * @memberof Encoding
   */
  public infrastructureId?: string;

  /**
   * @type {InfrastructureSettings}
   * @memberof Encoding
   */
  public infrastructure?: InfrastructureSettings;

  /**
   * Will be set to the encoder version that was actually used for the encoding. This is especially useful when starting an encoding with a version tag like STABLE or BETA.
   * @type {string}
   * @memberof Encoding
   */
  public selectedEncoderVersion?: string;

  /**
   * Will be set to the encoding mode that was actually used for the encoding. This is especially useful when starting an encoding with encoding mode STANDARD.
   * @type {EncodingMode}
   * @memberof Encoding
   */
  public selectedEncodingMode?: EncodingMode;

  /**
   * Contains the region which was selected when cloudregion:AUTO was specified
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

  constructor(obj?: Partial<Encoding>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.cloudRegion = map(obj.cloudRegion);
    this.fallbackCloudRegions = mapArray(obj.fallbackCloudRegions);
    this.encoderVersion = map(obj.encoderVersion);
    this.infrastructureId = map(obj.infrastructureId);
    this.infrastructure = map(obj.infrastructure, InfrastructureSettings);
    this.selectedEncoderVersion = map(obj.selectedEncoderVersion);
    this.selectedEncodingMode = map(obj.selectedEncodingMode);
    this.selectedCloudRegion = map(obj.selectedCloudRegion);
    this.status = map(obj.status);
    this.labels = mapArray(obj.labels);
  }
}

export default Encoding;

