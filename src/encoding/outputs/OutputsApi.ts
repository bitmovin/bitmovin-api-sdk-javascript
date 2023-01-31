import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import TypeApi from './type/TypeApi';
import S3Api from './s3/S3Api';
import S3RoleBasedApi from './s3RoleBased/S3RoleBasedApi';
import GenericS3Api from './genericS3/GenericS3Api';
import LocalApi from './local/LocalApi';
import GcsApi from './gcs/GcsApi';
import GcsServiceAccountApi from './gcsServiceAccount/GcsServiceAccountApi';
import AzureApi from './azure/AzureApi';
import FtpApi from './ftp/FtpApi';
import SftpApi from './sftp/SftpApi';
import AkamaiMslApi from './akamaiMsl/AkamaiMslApi';
import AkamaiNetstorageApi from './akamaiNetstorage/AkamaiNetstorageApi';
import LiveMediaIngestApi from './liveMediaIngest/LiveMediaIngestApi';
import CdnApi from './cdn/CdnApi';
import CheckOutputPermissionsRequest from '../../models/CheckOutputPermissionsRequest';
import CheckOutputPermissionsResponse from '../../models/CheckOutputPermissionsResponse';
import Output from '../../models/Output';
import OutputType from '../../models/OutputType';
import PaginationResponse from '../../models/PaginationResponse';
import {OutputListQueryParams, OutputListQueryParamsBuilder} from './OutputListQueryParams';

/**
 * OutputsApi - object-oriented interface
 * @export
 * @class OutputsApi
 * @extends {BaseAPI}
 */
export default class OutputsApi extends BaseAPI {
  public type: TypeApi;
  public s3: S3Api;
  public s3RoleBased: S3RoleBasedApi;
  public genericS3: GenericS3Api;
  public local: LocalApi;
  public gcs: GcsApi;
  public gcsServiceAccount: GcsServiceAccountApi;
  public azure: AzureApi;
  public ftp: FtpApi;
  public sftp: SftpApi;
  public akamaiMsl: AkamaiMslApi;
  public akamaiNetstorage: AkamaiNetstorageApi;
  public liveMediaIngest: LiveMediaIngestApi;
  public cdn: CdnApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.s3 = new S3Api(configuration);
    this.s3RoleBased = new S3RoleBasedApi(configuration);
    this.genericS3 = new GenericS3Api(configuration);
    this.local = new LocalApi(configuration);
    this.gcs = new GcsApi(configuration);
    this.gcsServiceAccount = new GcsServiceAccountApi(configuration);
    this.azure = new AzureApi(configuration);
    this.ftp = new FtpApi(configuration);
    this.sftp = new SftpApi(configuration);
    this.akamaiMsl = new AkamaiMslApi(configuration);
    this.akamaiNetstorage = new AkamaiNetstorageApi(configuration);
    this.liveMediaIngest = new LiveMediaIngestApi(configuration);
    this.cdn = new CdnApi(configuration);
  }

  /**
   * @summary Check output permissions (S3 only)
   * @param {string} outputId Id of the output to be checked. Currently limited to S3 outputs. The access credentials that have been provided for this Output still need to be valid, otherwise the request will fail. If they are not valid any more, create a new Output with new credentials (resources are immutable).
   * @param {CheckOutputPermissionsRequest} [checkOutputPermissionsRequest] Additional parameters for the permissions check
   * @throws {BitmovinError}
   * @memberof OutputsApi
   */
  public checkPermissions(outputId: string, checkOutputPermissionsRequest?: CheckOutputPermissionsRequest): Promise<CheckOutputPermissionsResponse> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.post<CheckOutputPermissionsResponse>('/encoding/outputs/{output_id}/check-permissions', pathParamMap, checkOutputPermissionsRequest).then((response) => {
      return map(response, CheckOutputPermissionsResponse);
    });
  }

  /**
   * @summary Get Output Details
   * @param {string} outputId Id of the wanted output
   * @throws {BitmovinError}
   * @memberof OutputsApi
   */
  public get(outputId: string): Promise<Output> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<Output>('/encoding/outputs/{output_id}', pathParamMap).then((response) => {
      return map(response, Output);
    });
  }

  /**
   * @summary List all Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof OutputsApi
   */
  public list(queryParameters?: OutputListQueryParams | ((q: OutputListQueryParamsBuilder) => OutputListQueryParamsBuilder)): Promise<PaginationResponse<Output>> {
    let queryParams: OutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new OutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Output>>('/encoding/outputs', {}, queryParams).then((response) => {
      return new PaginationResponse<Output>(response, Output);
    });
  }
}
