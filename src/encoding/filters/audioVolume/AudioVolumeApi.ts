import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import AudioVolumeFilter from '../../../models/AudioVolumeFilter';
import BitmovinResponse from '../../../models/BitmovinResponse';
import PaginationResponse from '../../../models/PaginationResponse';
import {AudioVolumeFilterListQueryParams, AudioVolumeFilterListQueryParamsBuilder} from './AudioVolumeFilterListQueryParams';

/**
 * AudioVolumeApi - object-oriented interface
 * @export
 * @class AudioVolumeApi
 * @extends {BaseAPI}
 */
export default class AudioVolumeApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Create Audio Volume Filter
   * @param {AudioVolumeFilter} audioVolumeFilter The Audio Volume Filter to be created
   * @throws {RequiredError}
   * @memberof AudioVolumeApi
   */
  public create(audioVolumeFilter?: AudioVolumeFilter): Promise<AudioVolumeFilter> {
    return this.restClient.post<AudioVolumeFilter>('/encoding/filters/audio-volume', {}, audioVolumeFilter).then((response) => {
      return new AudioVolumeFilter(response);
    });
  }

  /**
   * @summary Delete Audio Volume Filter
   * @param {string} filterId Id of the Audio volume configuration.
   * @throws {RequiredError}
   * @memberof AudioVolumeApi
   */
  public delete(filterId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/filters/audio-volume/{filter_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Audio Volume Filter Details
   * @param {string} filterId Id of the audio volume configuration.
   * @throws {RequiredError}
   * @memberof AudioVolumeApi
   */
  public get(filterId: string): Promise<AudioVolumeFilter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<AudioVolumeFilter>('/encoding/filters/audio-volume/{filter_id}', pathParamMap).then((response) => {
      return new AudioVolumeFilter(response);
    });
  }

  /**
   * @summary List Audio Volume Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof AudioVolumeApi
   */
  public list(queryParameters?: AudioVolumeFilterListQueryParams | ((q: AudioVolumeFilterListQueryParamsBuilder) => AudioVolumeFilterListQueryParamsBuilder)): Promise<PaginationResponse<AudioVolumeFilter>> {
    let queryParams: AudioVolumeFilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AudioVolumeFilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AudioVolumeFilter>>('/encoding/filters/audio-volume', {}, queryParams).then((response) => {
      return new PaginationResponse<AudioVolumeFilter>(response, AudioVolumeFilter);;
    });
  }
}
