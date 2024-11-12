import {map, mapArray} from '../common/Mapper';
import AkamaiCloudRegion from './AkamaiCloudRegion';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AkamaiAccountRegionSettings
 */
export class AkamaiAccountRegionSettings extends BitmovinResource {
  /**
   * Id of the VPC subnet for encoding instances (required)
   * @type {number}
   * @memberof AkamaiAccountRegionSettings
   */
  public subnetId?: number;

  /**
   * Id of the firewall for encoding instances (required)
   * @type {number}
   * @memberof AkamaiAccountRegionSettings
   */
  public firewallId?: number;

  /**
   * @type {AkamaiCloudRegion}
   * @memberof AkamaiAccountRegionSettings
   */
  public region?: AkamaiCloudRegion;

  constructor(obj?: Partial<AkamaiAccountRegionSettings>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.subnetId = map(obj.subnetId);
    this.firewallId = map(obj.firewallId);
    this.region = map(obj.region);
  }
}

export default AkamaiAccountRegionSettings;

