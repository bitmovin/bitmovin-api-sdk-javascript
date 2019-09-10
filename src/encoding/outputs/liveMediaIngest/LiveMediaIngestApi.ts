import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import LiveMediaIngestOutput from '../../../models/LiveMediaIngestOutput';
import PaginationResponse from '../../../models/PaginationResponse';
import {LiveMediaIngestOutputListQueryParams, LiveMediaIngestOutputListQueryParamsBuilder} from './LiveMediaIngestOutputListQueryParams';

/**
 * LiveMediaIngestApi - object-oriented interface
 * @export
 * @class LiveMediaIngestApi
 * @extends {BaseAPI}
 */
export default class LiveMediaIngestApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Live Media Ingest Output
   * @param {LiveMediaIngestOutput} liveMediaIngestOutput The Live Media Ingest output to be created
   * @throws {BitmovinError}
   * @memberof LiveMediaIngestApi
   */
  public create(liveMediaIngestOutput?: LiveMediaIngestOutput): Promise<LiveMediaIngestOutput> {
    return this.restClient.post<LiveMediaIngestOutput>('/encoding/outputs/live-media-ingest', {}, liveMediaIngestOutput).then((response) => {
      return map(response, LiveMediaIngestOutput);
    });
  }

  /**
   * @summary Delete Live Media Ingest Output
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof LiveMediaIngestApi
   */
  public delete(outputId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/outputs/live-media-ingest/{output_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Live Media Ingest Output Details
   * @param {string} outputId Id of the output
   * @throws {BitmovinError}
   * @memberof LiveMediaIngestApi
   */
  public get(outputId: string): Promise<LiveMediaIngestOutput> {
    const pathParamMap = {
      output_id: outputId
    };
    return this.restClient.get<LiveMediaIngestOutput>('/encoding/outputs/live-media-ingest/{output_id}', pathParamMap).then((response) => {
      return map(response, LiveMediaIngestOutput);
    });
  }

  /**
   * @summary List Live Media Ingest Outputs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LiveMediaIngestApi
   */
  public list(queryParameters?: LiveMediaIngestOutputListQueryParams | ((q: LiveMediaIngestOutputListQueryParamsBuilder) => LiveMediaIngestOutputListQueryParamsBuilder)): Promise<PaginationResponse<LiveMediaIngestOutput>> {
    let queryParams: LiveMediaIngestOutputListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new LiveMediaIngestOutputListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<LiveMediaIngestOutput>>('/encoding/outputs/live-media-ingest', {}, queryParams).then((response) => {
      return new PaginationResponse<LiveMediaIngestOutput>(response, LiveMediaIngestOutput);
    });
  }
}
