import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import FtpInput from '../../../models/FtpInput';
import PaginationResponse from '../../../models/PaginationResponse';
import {FtpInputListQueryParams, FtpInputListQueryParamsBuilder} from './FtpInputListQueryParams';

/**
 * FtpApi - object-oriented interface
 * @export
 * @class FtpApi
 * @extends {BaseAPI}
 */
export default class FtpApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create FTP Input
   * @param {FtpInput} ftpInput The FTP input to be created
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public create(ftpInput?: FtpInput): Promise<FtpInput> {
    return this.restClient.post<FtpInput>('/encoding/inputs/ftp', {}, ftpInput).then((response) => {
      return map(response, FtpInput);
    });
  }

  /**
   * @summary Delete FTP Input
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public delete(inputId: string): Promise<FtpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.delete<FtpInput>('/encoding/inputs/ftp/{input_id}', pathParamMap).then((response) => {
      return map(response, FtpInput);
    });
  }

  /**
   * @summary FTP Input Details
   * @param {string} inputId Id of the input
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public get(inputId: string): Promise<FtpInput> {
    const pathParamMap = {
      input_id: inputId
    };
    return this.restClient.get<FtpInput>('/encoding/inputs/ftp/{input_id}', pathParamMap).then((response) => {
      return map(response, FtpInput);
    });
  }

  /**
   * @summary List FTP Inputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FtpApi
   */
  public list(queryParameters?: FtpInputListQueryParams | ((q: FtpInputListQueryParamsBuilder) => FtpInputListQueryParamsBuilder)): Promise<PaginationResponse<FtpInput>> {
    let queryParams: FtpInputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new FtpInputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<FtpInput>>('/encoding/inputs/ftp', {}, queryParams).then((response) => {
      return new PaginationResponse<FtpInput>(response, FtpInput);
    });
  }
}
