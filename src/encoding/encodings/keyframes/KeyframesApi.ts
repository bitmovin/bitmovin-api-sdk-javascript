import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Keyframe from '../../../models/Keyframe';
import PaginationResponse from '../../../models/PaginationResponse';
import {KeyframeListQueryParams, KeyframeListQueryParamsBuilder} from './KeyframeListQueryParams';

/**
 * KeyframesApi - object-oriented interface
 * @export
 * @class KeyframesApi
 * @extends {BaseAPI}
 */
export default class KeyframesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Keyframes
   * @param {string} encodingId Id of the encoding.
   * @param {Keyframe} keyframe The Keyframes to be created
   * @throws {BitmovinError}
   * @memberof KeyframesApi
   */
  public create(encodingId: string, keyframe?: Keyframe): Promise<Keyframe> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Keyframe>('/encoding/encodings/{encoding_id}/keyframes', pathParamMap, keyframe).then((response) => {
      return map(response, Keyframe);
    });
  }

  /**
   * @summary Delete Keyframe
   * @param {string} encodingId Id of the encoding.
   * @param {string} keyframeId Id of the keyframe.
   * @throws {BitmovinError}
   * @memberof KeyframesApi
   */
  public delete(encodingId: string, keyframeId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      keyframe_id: keyframeId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/keyframes/{keyframe_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Keyframe Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} keyframeId Id of the keyframe.
   * @throws {BitmovinError}
   * @memberof KeyframesApi
   */
  public get(encodingId: string, keyframeId: string): Promise<Keyframe> {
    const pathParamMap = {
      encoding_id: encodingId,
      keyframe_id: keyframeId
    };
    return this.restClient.get<Keyframe>('/encoding/encodings/{encoding_id}/keyframes/{keyframe_id}', pathParamMap).then((response) => {
      return map(response, Keyframe);
    });
  }

  /**
   * @summary List all Keyframes
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof KeyframesApi
   */
  public list(encodingId: string, queryParameters?: KeyframeListQueryParams | ((q: KeyframeListQueryParamsBuilder) => KeyframeListQueryParamsBuilder)): Promise<PaginationResponse<Keyframe>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: KeyframeListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new KeyframeListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Keyframe>>('/encoding/encodings/{encoding_id}/keyframes', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Keyframe>(response, Keyframe);
    });
  }
}
