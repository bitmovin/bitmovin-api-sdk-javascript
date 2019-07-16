import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CloudRegion from './CloudRegion';
import InfrastructureSettings from './InfrastructureSettings';

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
   * You may pass a list of groups associated with this encoding. This will enable you to group results in the statistics resource
   * @type {string[]}
   * @memberof Encoding
   */
  public labels?: string[];

  constructor(obj: Partial<Encoding>) {
    super(obj);
    this.cloudRegion = map(obj.cloudRegion);
    this.encoderVersion = map(obj.encoderVersion);
    this.infrastructureId = map(obj.infrastructureId);
    this.infrastructure = map<InfrastructureSettings>(obj.infrastructure, InfrastructureSettings);
    this.labels = map(obj.labels);
  }
}

export default Encoding;

