import {map, mapArray} from '../common/Mapper';
import AzureCloudRegion from './AzureCloudRegion';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class AzureAccountRegionSettings
 */
export class AzureAccountRegionSettings extends BitmovinResource {
  /**
   * Name of the virtual network (required)
   * @type {string}
   * @memberof AzureAccountRegionSettings
   */
  public networkName?: string;

  /**
   * Name of the subnet (required)
   * @type {string}
   * @memberof AzureAccountRegionSettings
   */
  public subnetName?: string;

  /**
   * @type {AzureCloudRegion}
   * @memberof AzureAccountRegionSettings
   */
  public region?: AzureCloudRegion;

  constructor(obj?: Partial<AzureAccountRegionSettings>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.networkName = map(obj.networkName);
    this.subnetName = map(obj.subnetName);
    this.region = map(obj.region);
  }
}

export default AzureAccountRegionSettings;

