import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import RawId3Tag from '../../../../../../models/RawId3Tag';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {RawId3TagListQueryParams, RawId3TagListQueryParamsBuilder} from './RawId3TagListQueryParams';
import {getType, map} from '../../../../../../common/Mapper';

/**
 * RawApi - object-oriented interface
 * @export
 * @class RawApi
 * @extends {BaseAPI}
 */
export default class RawApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Raw ID3 Tag to Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {RawId3Tag} rawId3Tag The Raw ID3 Tag to be created
   * @throws {RequiredError}
   * @memberof RawApi
   */
  public create(encodingId: string, muxingId: string, rawId3Tag?: RawId3Tag): Promise<RawId3Tag> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<RawId3Tag>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/raw', pathParamMap, rawId3Tag).then((response) => {
      return new RawId3Tag(response);
    });
  }

  /**
   * @summary Delete Raw ID3 Tag of Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {string} id3TagId ID of the RAW ID3 Tag
   * @throws {RequiredError}
   * @memberof RawApi
   */
  public delete(encodingId: string, muxingId: string, id3TagId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      id3_tag_id: id3TagId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/raw/{id3_tag_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Raw ID3 Tag Details of Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {string} id3TagId ID of the Raw ID3 Tag
   * @throws {RequiredError}
   * @memberof RawApi
   */
  public get(encodingId: string, muxingId: string, id3TagId: string): Promise<RawId3Tag> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      id3_tag_id: id3TagId
    };
    return this.restClient.get<RawId3Tag>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/raw/{id3_tag_id}', pathParamMap).then((response) => {
      return new RawId3Tag(response);
    });
  }

  /**
   * @summary List Raw ID3 Tags of Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof RawApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: RawId3TagListQueryParams | ((q: RawId3TagListQueryParamsBuilder) => RawId3TagListQueryParamsBuilder)): Promise<PaginationResponse<RawId3Tag>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: RawId3TagListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new RawId3TagListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<RawId3Tag>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/raw', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<RawId3Tag>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new RawId3Tag(i));
      }
      return paginationResponse;
    });
  }
}
