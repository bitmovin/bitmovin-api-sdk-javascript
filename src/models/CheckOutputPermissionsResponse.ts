import {map, mapArray} from '../common/Mapper';
import OutputType from './OutputType';

/**
 * @export
 * @class CheckOutputPermissionsResponse
 */
export class CheckOutputPermissionsResponse {
  /**
   * Id of the output for which permissions were checked
   * @type {string}
   * @memberof CheckOutputPermissionsResponse
   */
  public outputId?: string;

  /**
   * The type of the output for which permissions were checked
   * @type {OutputType}
   * @memberof CheckOutputPermissionsResponse
   */
  public outputType?: OutputType;

  /**
   * The path on the storage for which permissions were checked. In AWS S3 terminology, this corresponds to a \"prefix\". An empty string corresponds to the root directory.
   * @type {string}
   * @memberof CheckOutputPermissionsResponse
   */
  public path?: string;

  /**
   * Indicates if permissions on the storage are configured correctly to be used as output target by the Bitmovin encoder. If \"false\", *failureReason* will provide additional information.
   * @type {boolean}
   * @memberof CheckOutputPermissionsResponse
   */
  public passed?: boolean;

  /**
   * Contains nothing if the check succeeded. Otherwise, contains a message explaining why it failed.
   * @type {string}
   * @memberof CheckOutputPermissionsResponse
   */
  public failureReason?: string;

  constructor(obj?: Partial<CheckOutputPermissionsResponse>) {
    if(!obj) {
      return;
    }
    this.outputId = map(obj.outputId);
    this.outputType = map(obj.outputType);
    this.path = map(obj.path);
    this.passed = map(obj.passed);
    this.failureReason = map(obj.failureReason);
  }
}

export default CheckOutputPermissionsResponse;

