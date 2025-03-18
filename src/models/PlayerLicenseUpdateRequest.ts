import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PlayerLicenseUpdateRequest
 */
export class PlayerLicenseUpdateRequest {
  /**
   * Name of the License (required)
   * @type {string}
   * @memberof PlayerLicenseUpdateRequest
   */
  public name?: string;

  constructor(obj?: Partial<PlayerLicenseUpdateRequest>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
  }
}

export default PlayerLicenseUpdateRequest;

