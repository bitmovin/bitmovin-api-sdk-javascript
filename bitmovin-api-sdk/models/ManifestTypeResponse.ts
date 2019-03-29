import {map} from '../common/Mapper';
import ManifestType from './ManifestType';

/**
 * @export
 * @class ManifestTypeResponse
 */
export default class ManifestTypeResponse {
  constructor(obj: any) {
    this.type = map(obj.type);
  }

  /**
   * The type of the manifest
   * @type {ManifestType}
   * @memberof ManifestTypeResponse
   */
  public type?: ManifestType;
}
