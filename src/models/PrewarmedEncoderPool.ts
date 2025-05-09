import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import CloudRegion from './CloudRegion';
import PrewarmedEncoderDiskSize from './PrewarmedEncoderDiskSize';
import PrewarmedEncoderPoolStatus from './PrewarmedEncoderPoolStatus';

/**
 * @export
 * @class PrewarmedEncoderPool
 */
export class PrewarmedEncoderPool extends BitmovinResource {
  /**
   * The encoder version which the pool's instances will be running (required)
   * @type {string}
   * @memberof PrewarmedEncoderPool
   */
  public encoderVersion?: string;

  /**
   * The cloud region in which the pool's instances will be running. Must be a specific region (e.g. not 'AUTO', 'GOOGLE' or 'EUROPE') (required)
   * @type {CloudRegion}
   * @memberof PrewarmedEncoderPool
   */
  public cloudRegion?: CloudRegion;

  /**
   * Define an external infrastructure to run the pool on.
   * @type {string}
   * @memberof PrewarmedEncoderPool
   */
  public infrastructureId?: string;

  /**
   * Disk size of the prewarmed instances in GB. Needs to be chosen depending on input file sizes and encoding features used. (required)
   * @type {PrewarmedEncoderDiskSize}
   * @memberof PrewarmedEncoderPool
   */
  public diskSize?: PrewarmedEncoderDiskSize;

  /**
   * Number of instances to keep prewarmed while the pool is running (required)
   * @type {number}
   * @memberof PrewarmedEncoderPool
   */
  public targetPoolSize?: number;

  /**
   * Activate dynamic pool behaviour. Pool will increase/decrease based on usage up until a size of 10 instances. Minimum pool size is set by targetPoolSize
   * @type {boolean}
   * @memberof PrewarmedEncoderPool
   */
  public dynamicPool?: boolean;

  /**
   * Create pool with GPU instances for hardware encoding presets (e.g., VOD_HARDWARE_SHORTFORM).
   * @type {boolean}
   * @memberof PrewarmedEncoderPool
   */
  public gpuEnabled?: boolean;

  /**
   * Current status of the pool.
   * @type {PrewarmedEncoderPoolStatus}
   * @memberof PrewarmedEncoderPool
   */
  public status?: PrewarmedEncoderPoolStatus;

  constructor(obj?: Partial<PrewarmedEncoderPool>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.encoderVersion = map(obj.encoderVersion);
    this.cloudRegion = map(obj.cloudRegion);
    this.infrastructureId = map(obj.infrastructureId);
    this.diskSize = map(obj.diskSize);
    this.targetPoolSize = map(obj.targetPoolSize);
    this.dynamicPool = map(obj.dynamicPool);
    this.gpuEnabled = map(obj.gpuEnabled);
    this.status = map(obj.status);
  }
}

export default PrewarmedEncoderPool;

