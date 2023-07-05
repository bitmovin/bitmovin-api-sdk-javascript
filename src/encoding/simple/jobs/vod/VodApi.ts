import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import SimpleEncodingVodJobRequest from '../../../../models/SimpleEncodingVodJobRequest';
import SimpleEncodingVodJobResponse from '../../../../models/SimpleEncodingVodJobResponse';
import PaginationResponse from '../../../../models/PaginationResponse';
import {SimpleEncodingVodJobResponseListQueryParams, SimpleEncodingVodJobResponseListQueryParamsBuilder} from './SimpleEncodingVodJobResponseListQueryParams';

/**
 * VodApi - object-oriented interface
 * @export
 * @class VodApi
 * @extends {BaseAPI}
 */
export default class VodApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create a Simple Encoding VOD Job
   * @param {SimpleEncodingVodJobRequest} simpleEncodingVodJobRequest The Simple Encoding VOD Job to be created.
   * @throws {BitmovinError}
   * @memberof VodApi
   */
  public create(simpleEncodingVodJobRequest?: SimpleEncodingVodJobRequest): Promise<SimpleEncodingVodJobResponse> {
    return this.restClient.post<SimpleEncodingVodJobResponse>('/encoding/simple/jobs/vod', {}, simpleEncodingVodJobRequest).then((response) => {
      return map(response, SimpleEncodingVodJobResponse);
    });
  }

  /**
   * @summary Simple Encoding VOD Job details
   * @param {string} simpleEncodingJobId Id of the Simple Encoding VOD Job
   * @throws {BitmovinError}
   * @memberof VodApi
   */
  public get(simpleEncodingJobId: string): Promise<SimpleEncodingVodJobResponse> {
    const pathParamMap = {
      simple_encoding_job_id: simpleEncodingJobId
    };
    return this.restClient.get<SimpleEncodingVodJobResponse>('/encoding/simple/jobs/vod/{simple_encoding_job_id}', pathParamMap).then((response) => {
      return map(response, SimpleEncodingVodJobResponse);
    });
  }

  /**
   * @summary List all Simple Encoding VOD Jobs
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof VodApi
   */
  public list(queryParameters?: SimpleEncodingVodJobResponseListQueryParams | ((q: SimpleEncodingVodJobResponseListQueryParamsBuilder) => SimpleEncodingVodJobResponseListQueryParamsBuilder)): Promise<PaginationResponse<SimpleEncodingVodJobResponse>> {
    let queryParams: SimpleEncodingVodJobResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SimpleEncodingVodJobResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SimpleEncodingVodJobResponse>>('/encoding/simple/jobs/vod', {}, queryParams).then((response) => {
      return new PaginationResponse<SimpleEncodingVodJobResponse>(response, SimpleEncodingVodJobResponse);
    });
  }
}
