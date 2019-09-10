import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ConvertSccCaption from '../../../../models/ConvertSccCaption';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ConvertSccCaptionListQueryParams, ConvertSccCaptionListQueryParamsBuilder} from './ConvertSccCaptionListQueryParams';

/**
 * SccApi - object-oriented interface
 * @export
 * @class SccApi
 * @extends {BaseAPI}
 */
export default class SccApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Convert SCC captions
   * @param {string} encodingId Id of the encoding.
   * @param {ConvertSccCaption} convertSccCaption The SCC captions to be created
   * @throws {BitmovinError}
   * @memberof SccApi
   */
  public create(encodingId: string, convertSccCaption?: ConvertSccCaption): Promise<ConvertSccCaption> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ConvertSccCaption>('/encoding/encodings/{encoding_id}/captions/scc', pathParamMap, convertSccCaption).then((response) => {
      return map(response, ConvertSccCaption);
    });
  }

  /**
   * @summary Delete Convert SCC captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the caption.
   * @throws {BitmovinError}
   * @memberof SccApi
   */
  public delete(encodingId: string, captionsId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/captions/scc/{captions_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Convert SCC captions Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the caption.
   * @throws {BitmovinError}
   * @memberof SccApi
   */
  public get(encodingId: string, captionsId: string): Promise<ConvertSccCaption> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.get<ConvertSccCaption>('/encoding/encodings/{encoding_id}/captions/scc/{captions_id}', pathParamMap).then((response) => {
      return map(response, ConvertSccCaption);
    });
  }

  /**
   * @summary List Convert SCC captions
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SccApi
   */
  public list(encodingId: string, queryParameters?: ConvertSccCaptionListQueryParams | ((q: ConvertSccCaptionListQueryParamsBuilder) => ConvertSccCaptionListQueryParamsBuilder)): Promise<PaginationResponse<ConvertSccCaption>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ConvertSccCaptionListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ConvertSccCaptionListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ConvertSccCaption>>('/encoding/encodings/{encoding_id}/captions/scc', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ConvertSccCaption>(response, ConvertSccCaption);
    });
  }
}
