import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import FtpOutput from '../../../models/FtpOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {FtpOutputListQueryParams, FtpOutputListQueryParamsBuilder} from './FtpOutputListQueryParams';
import {getType, map} from '../../../common/Mapper';

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
   * @summary Create FTP Output
   * @param {FtpOutput} ftpOutput The FTP output to be created
   * @throws {RequiredError}
   * @memberof FtpApi
   */
  public create(ftpOutput?: FtpOutput): Promise<FtpOutput> {
    return this.restClient.post<FtpOutput>('/encoding/outputs/ftp', {}, ftpOutput).then((response) => {
      return new FtpOutput(response);
    });
  }

  /**
   * @summary Delete FTP Output
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof FtpApi
   */
  public delete(outputId: string): Promise<FtpOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<FtpOutput>('/encoding/outputs/ftp/{output_id}', pathParamMap).then((response) => {
      return new FtpOutput(response);
    });
  }

  /**
   * @summary FTP Output Details
   * @param {string} outputId Id of the output
   * @throws {RequiredError}
   * @memberof FtpApi
   */
  public get(outputId: string): Promise<FtpOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<FtpOutput>('/encoding/outputs/ftp/{output_id}', pathParamMap).then((response) => {
      return new FtpOutput(response);
    });
  }

  /**
   * @summary List FTP Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof FtpApi
   */
  public list(queryParameters?: FtpOutputListQueryParams | ((q: FtpOutputListQueryParamsBuilder) => FtpOutputListQueryParamsBuilder)): Promise<PaginationResponse<FtpOutput>> {
    let queryParams: FtpOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new FtpOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<FtpOutput>>('/encoding/outputs/ftp', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<FtpOutput>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new FtpOutput(i));
      }
      return paginationResponse;
    });
  }
}
