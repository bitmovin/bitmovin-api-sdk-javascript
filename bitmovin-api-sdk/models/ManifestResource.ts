import {map} from '../common/Mapper';

/**
 * @export
 * @class ManifestResource
 */
export default class ManifestResource {
  constructor(obj: any) {
    this.manifestId = map(obj.manifestId);
  }

  /**
   * Id of the manifest resource
   * @type {string}
   * @memberof ManifestResource
   */
  public manifestId: string;
}
