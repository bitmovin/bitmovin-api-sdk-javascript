import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class GceAccountRegionSettings
 */
export class GceAccountRegionSettings extends BitmovinResource {
  /**
   * Id of the network for encoding instances (required)
   * @type {string}
   * @memberof GceAccountRegionSettings
   */
  public network?: string;

  /**
   * Id of the subnet for encoding instances (required)
   * @type {string}
   * @memberof GceAccountRegionSettings
   */
  public subnetId?: string;

  constructor(obj?: Partial<GceAccountRegionSettings>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.network = map(obj.network);
    this.subnetId = map(obj.subnetId);
  }
}

export default GceAccountRegionSettings;

