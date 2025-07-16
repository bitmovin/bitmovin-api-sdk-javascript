import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import TypeApi from './type/TypeApi';
import RtmpApi from './rtmp/RtmpApi';
import RedundantRtmpApi from './redundantRtmp/RedundantRtmpApi';
import S3Api from './s3/S3Api';
import S3RoleBasedApi from './s3RoleBased/S3RoleBasedApi';
import GenericS3Api from './genericS3/GenericS3Api';
import LocalApi from './local/LocalApi';
import GcsApi from './gcs/GcsApi';
import GcsServiceAccountApi from './gcsServiceAccount/GcsServiceAccountApi';
import AzureApi from './azure/AzureApi';
import FtpApi from './ftp/FtpApi';
import HlsApi from './hls/HlsApi';
import SftpApi from './sftp/SftpApi';
import HttpApi from './http/HttpApi';
import HttpsApi from './https/HttpsApi';
import AsperaApi from './aspera/AsperaApi';
import AkamaiNetstorageApi from './akamaiNetstorage/AkamaiNetstorageApi';
import SrtApi from './srt/SrtApi';
import ZixiApi from './zixi/ZixiApi';
import DirectFileUploadApi from './directFileUpload/DirectFileUploadApi';
import Input from '../../models/Input';
import PaginationResponse from '../../models/PaginationResponse';
import {InputListQueryParams, InputListQueryParamsBuilder} from './InputListQueryParams';

/**
 * InputsApi - object-oriented interface
 * @export
 * @class InputsApi
 * @extends {BaseAPI}
 */
export default class InputsApi extends BaseAPI {
  public type: TypeApi;
  public rtmp: RtmpApi;
  public redundantRtmp: RedundantRtmpApi;
  public s3: S3Api;
  public s3RoleBased: S3RoleBasedApi;
  public genericS3: GenericS3Api;
  public local: LocalApi;
  public gcs: GcsApi;
  public gcsServiceAccount: GcsServiceAccountApi;
  public azure: AzureApi;
  public ftp: FtpApi;
  public hls: HlsApi;
  public sftp: SftpApi;
  public http: HttpApi;
  public https: HttpsApi;
  public aspera: AsperaApi;
  public akamaiNetstorage: AkamaiNetstorageApi;
  public srt: SrtApi;
  public zixi: ZixiApi;
  public directFileUpload: DirectFileUploadApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.rtmp = new RtmpApi(configuration);
    this.redundantRtmp = new RedundantRtmpApi(configuration);
    this.s3 = new S3Api(configuration);
    this.s3RoleBased = new S3RoleBasedApi(configuration);
    this.genericS3 = new GenericS3Api(configuration);
    this.local = new LocalApi(configuration);
    this.gcs = new GcsApi(configuration);
    this.gcsServiceAccount = new GcsServiceAccountApi(configuration);
    this.azure = new AzureApi(configuration);
    this.ftp = new FtpApi(configuration);
    this.hls = new HlsApi(configuration);
    this.sftp = new SftpApi(configuration);
    this.http = new HttpApi(configuration);
    this.https = new HttpsApi(configuration);
    this.aspera = new AsperaApi(configuration);
    this.akamaiNetstorage = new AkamaiNetstorageApi(configuration);
    this.srt = new SrtApi(configuration);
    this.zixi = new ZixiApi(configuration);
    this.directFileUpload = new DirectFileUploadApi(configuration);
  }

  /**
   * @summary Get Input Details
   * @param {string} inputId Id of the Input
   * @throws {BitmovinError}
   * @memberof InputsApi
   */
  public get(inputId: string): Promise<Input> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<Input>('/encoding/inputs/{input_id}', pathParamMap).then((response) => {
      return map(response, Input);
    });
  }

  /**
   * @summary List all Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof InputsApi
   */
  public list(queryParameters?: InputListQueryParams | ((q: InputListQueryParamsBuilder) => InputListQueryParamsBuilder)): Promise<PaginationResponse<Input>> {
    let queryParams: InputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new InputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Input>>('/encoding/inputs', {}, queryParams).then((response) => {
      return new PaginationResponse<Input>(response, Input);
    });
  }
}
