import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import ActionsApi from './actions/ActionsApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import StreamKey from '../../../models/StreamKey';
import PaginationResponse from '../../../models/PaginationResponse';
import {StreamKeyListQueryParams, StreamKeyListQueryParamsBuilder} from './StreamKeyListQueryParams';

/**
 * StreamKeysApi - object-oriented interface
 * @export
 * @class StreamKeysApi
 * @extends {BaseAPI}
 */
export default class StreamKeysApi extends BaseAPI {
  public actions: ActionsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.actions = new ActionsApi(configuration);
  }

  /**
   * @summary Create new stream key
   * @param {StreamKey} streamKey The stream key to be created
   * @throws {BitmovinError}
   * @memberof StreamKeysApi
   */
  public create(streamKey?: StreamKey): Promise<StreamKey> {
    return this.restClient.post<StreamKey>('/encoding/live/stream-keys', {}, streamKey).then((response) => {
      return map(response, StreamKey);
    });
  }

  /**
   * @summary Delete Stream Key
   * @param {string} streamKeyId Id of the stream key
   * @throws {BitmovinError}
   * @memberof StreamKeysApi
   */
  public delete(streamKeyId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      stream_key_id: streamKeyId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/live/stream-keys/{stream_key_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Stream Key details
   * @param {string} streamKeyId Id of the stream key
   * @throws {BitmovinError}
   * @memberof StreamKeysApi
   */
  public get(streamKeyId: string): Promise<StreamKey> {
    const pathParamMap = {
      stream_key_id: streamKeyId
    };
    return this.restClient.get<StreamKey>('/encoding/live/stream-keys/{stream_key_id}', pathParamMap).then((response) => {
      return map(response, StreamKey);
    });
  }

  /**
   * @summary List Stream Keys
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof StreamKeysApi
   */
  public list(queryParameters?: StreamKeyListQueryParams | ((q: StreamKeyListQueryParamsBuilder) => StreamKeyListQueryParamsBuilder)): Promise<PaginationResponse<StreamKey>> {
    let queryParams: StreamKeyListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StreamKeyListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StreamKey>>('/encoding/live/stream-keys', {}, queryParams).then((response) => {
      return new PaginationResponse<StreamKey>(response, StreamKey);
    });
  }
}
