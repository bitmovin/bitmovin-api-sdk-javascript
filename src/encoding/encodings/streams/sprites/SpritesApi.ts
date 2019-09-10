import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import Sprite from '../../../../models/Sprite';
import PaginationResponse from '../../../../models/PaginationResponse';
import {SpriteListQueryParams, SpriteListQueryParamsBuilder} from './SpriteListQueryParams';

/**
 * SpritesApi - object-oriented interface
 * @export
 * @class SpritesApi
 * @extends {BaseAPI}
 */
export default class SpritesApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Sprite
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {Sprite} sprite The Sprite to be added
   * @throws {BitmovinError}
   * @memberof SpritesApi
   */
  public create(encodingId: string, streamId: string, sprite?: Sprite): Promise<Sprite> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<Sprite>('/encoding/encodings/{encoding_id}/streams/{stream_id}/sprites', pathParamMap, sprite).then((response) => {
      return map(response, Sprite);
    });
  }

  /**
   * @summary Delete Sprite
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} spriteId Id of the sprite.
   * @throws {BitmovinError}
   * @memberof SpritesApi
   */
  public delete(encodingId: string, streamId: string, spriteId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      sprite_id: spriteId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/sprites/{sprite_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Sprite Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} spriteId Id of the sprite configuration.
   * @throws {BitmovinError}
   * @memberof SpritesApi
   */
  public get(encodingId: string, streamId: string, spriteId: string): Promise<Sprite> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      sprite_id: spriteId
    };
    return this.restClient.get<Sprite>('/encoding/encodings/{encoding_id}/streams/{stream_id}/sprites/{sprite_id}', pathParamMap).then((response) => {
      return map(response, Sprite);
    });
  }

  /**
   * @summary List Sprites
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SpritesApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: SpriteListQueryParams | ((q: SpriteListQueryParamsBuilder) => SpriteListQueryParamsBuilder)): Promise<PaginationResponse<Sprite>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: SpriteListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SpriteListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Sprite>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/sprites', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<Sprite>(response, Sprite);
    });
  }
}
