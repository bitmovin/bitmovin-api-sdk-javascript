import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AudioMixFilter from '../../../models/AudioMixFilter';
import BitmovinResponse from '../../../models/BitmovinResponse';
import PaginationResponse from '../../../models/PaginationResponse';
import {AudioMixFilterListQueryParams, AudioMixFilterListQueryParamsBuilder} from './AudioMixFilterListQueryParams';
import {getType, map} from '../../../common/Mapper';

/**
 * AudioMixApi - object-oriented interface
 * @export
 * @class AudioMixApi
 * @extends {BaseAPI}
 */
export default class AudioMixApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Audio Mix Filter
   * @param {AudioMixFilter} audioMixFilter The Audio Mix Filter to be created
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public create(audioMixFilter?: AudioMixFilter): Promise<AudioMixFilter> {
    return this.restClient.post<AudioMixFilter>('/encoding/filters/audio-mix', {}, audioMixFilter).then((response) => {
      return new AudioMixFilter(response);
    });
  }

  /**
   * @summary Delete Audio Mix Filter
   * @param {string} filterId Id of the Audio Mix configuration.
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/audio-mix/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Audio Mix Filter Details
   * @param {string} filterId Id of the Audio Mix configuration.
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public get(filterId: string): Promise<AudioMixFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<AudioMixFilter>('/encoding/filters/audio-mix/{filter_id}', pathParamMap).then((response) => {
      return new AudioMixFilter(response);
    });
  }

  /**
   * @summary List Audio Mix Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AudioMixApi
   */
  public list(queryParameters?: AudioMixFilterListQueryParams | ((q: AudioMixFilterListQueryParamsBuilder) => AudioMixFilterListQueryParamsBuilder)): Promise<PaginationResponse<AudioMixFilter>> {
    let queryParams: AudioMixFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AudioMixFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AudioMixFilter>>('/encoding/filters/audio-mix', {}, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<AudioMixFilter>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new AudioMixFilter(i));
      }
      return paginationResponse;
    });
  }
}
