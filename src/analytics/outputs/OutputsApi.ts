import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import S3RoleBasedApi from './s3RoleBased/S3RoleBasedApi';

/**
 * OutputsApi - object-oriented interface
 * @export
 * @class OutputsApi
 * @extends {BaseAPI}
 */
export default class OutputsApi extends BaseAPI {
  public s3RoleBased: S3RoleBasedApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.s3RoleBased = new S3RoleBasedApi(configuration);
  }
}
