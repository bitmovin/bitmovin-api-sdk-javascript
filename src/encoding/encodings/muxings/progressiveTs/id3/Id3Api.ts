import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import RawApi from './raw/RawApi';
import FrameIdApi from './frameId/FrameIdApi';
import PlainTextApi from './plainText/PlainTextApi';
import Id3Tag from '../../../../../models/Id3Tag';
import { Id3TagTypeMap } from '../../../../../models/typeMappings'
import PaginationResponse from '../../../../../models/PaginationResponse';
import Id3TagListQueryParams from './Id3TagListQueryParams';

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
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof Id3Api
   */
  public list(encodingId: string, muxingId: string, queryParams?: Id3TagListQueryParams): Promise<PaginationResponse<Id3Tag>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<Id3Tag>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<Id3Tag>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Id3TagTypeMap[i.type](i));
      }
      return paginationResponse;
    });
  }
}
