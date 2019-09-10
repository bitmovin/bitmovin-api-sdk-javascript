import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class ManifestResource
 */
export class ManifestResource {
  /**
   * Id of the manifest resource (required)
   * @type {string}
   * @memberof ManifestResource
   */
  public manifestId?: string;

  constructor(obj?: Partial<ManifestResource>) {
    if(!obj) {
      return;
    }
    this.manifestId = map(obj.manifestId);
  }
}

export default ManifestResource;

