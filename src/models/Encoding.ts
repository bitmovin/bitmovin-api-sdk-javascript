import {map} from '../common/Mapper';
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

  constructor(obj: Partial<Encoding>) {
    super(obj);

    this.cloudRegion = obj.cloudRegion;
    this.encoderVersion = obj.encoderVersion;
    this.infrastructureId = obj.infrastructureId;
    this.infrastructure = map<InfrastructureSettings>(obj.infrastructure, InfrastructureSettings);
    this.selectedEncoderVersion = obj.selectedEncoderVersion;
    this.selectedEncodingMode = obj.selectedEncodingMode;
    this.selectedCloudRegion = obj.selectedCloudRegion;
    this.status = obj.status;
    this.labels = obj.labels || [];
  }
}

export default Encoding;

