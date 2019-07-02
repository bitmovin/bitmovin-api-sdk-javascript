import {map} from '../common/Mapper';

/**
 * @export
 * @class ManifestResource
 */
export class ManifestResource {
  constructor(obj: any) {
    this.manifestId = map(obj.manifestId);
  }

  /**
   * Id of the manifest resource (required)
   * @type {string}
   * @memberof ManifestResource
   */
  public manifestId: string;
}

export default ManifestResource;

