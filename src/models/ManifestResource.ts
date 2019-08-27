import {map} from '../common/Mapper';

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

  constructor(obj: Partial<ManifestResource>) {

    this.manifestId = obj.manifestId;
  }
}

export default ManifestResource;

