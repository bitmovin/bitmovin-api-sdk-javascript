import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import RawApi from './raw/RawApi';
import FrameIdApi from './frameId/FrameIdApi';
import PlainTextApi from './plainText/PlainTextApi';
import Id3Tag from '../../../../../models/Id3Tag';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {Id3TagListQueryParams, Id3TagListQueryParamsBuilder} from './Id3TagListQueryParams';
import {getType, map} from '../../../../../common/Mapper';

/**
 * Id3Api - object-oriented interface
 * @export
 * @class Id3Api
 * @extends {BaseAPI}
 */
export default class Id3Api extends BaseAPI {
  public raw: RawApi;
  public frameId: FrameIdApi;
  public plainText: PlainTextApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.raw = new RawApi(configuration);
    this.frameId = new FrameIdApi(configuration);
    this.plainText = new PlainTextApi(configuration);
  }

  /**
   * @summary List all ID3 Tags of Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Id3Api
   */
  public list(encodingId: string, muxingId: string, queryParameters?: Id3TagListQueryParams | ((q: Id3TagListQueryParamsBuilder) => Id3TagListQueryParamsBuilder)): Promise<PaginationResponse<Id3Tag>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: Id3TagListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new Id3TagListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Id3Tag>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Id3Tag>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => map(i, getType(i, Id3Tag)));
      }
      return paginationResponse;
    });
  }
}
