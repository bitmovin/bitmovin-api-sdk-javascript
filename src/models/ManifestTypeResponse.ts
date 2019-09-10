import {map, mapArray} from '../common/Mapper';
import ManifestType from './ManifestType';

/**
 * @export
 * @class ManifestTypeResponse
 */
export class ManifestTypeResponse {
  /**
   * The type of the manifest
   * @type {ManifestType}
   * @memberof ManifestTypeResponse
   */
  public type?: ManifestType;

  constructor(obj?: Partial<ManifestTypeResponse>) {
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default ManifestTypeResponse;

