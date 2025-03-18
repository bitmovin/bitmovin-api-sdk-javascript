import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import OciCloudRegion from './OciCloudRegion';

/**
 * @export
 * @class OciAccountRegionSettings
 */
export class OciAccountRegionSettings extends BitmovinResource {
  /**
   * Id of the VPC subnet for encoding instances. (required)
   * @type {string}
   * @memberof OciAccountRegionSettings
   */
  public subnetId?: string;

  /**
   * Region for encoding instances.
   * @type {OciCloudRegion}
   * @memberof OciAccountRegionSettings
   */
  public region?: OciCloudRegion;

  constructor(obj?: Partial<OciAccountRegionSettings>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.subnetId = map(obj.subnetId);
    this.region = map(obj.region);
  }
}

export default OciAccountRegionSettings;

