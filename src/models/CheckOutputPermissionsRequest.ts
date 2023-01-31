import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class CheckOutputPermissionsRequest
 */
export class CheckOutputPermissionsRequest {
  /**
   * The path on the storage for which permissions should be checked. In AWS S3 terminology, this corresponds to a \"prefix\". To perform the check, an empty test file (WritePermissionTestFile.txt) will be created in this location. Defaults to an empty string, which corresponds to the root directory.
   * @type {string}
   * @memberof CheckOutputPermissionsRequest
   */
  public path?: string;

  constructor(obj?: Partial<CheckOutputPermissionsRequest>) {
    if(!obj) {
      return;
    }
    this.path = map(obj.path);
  }
}

export default CheckOutputPermissionsRequest;

