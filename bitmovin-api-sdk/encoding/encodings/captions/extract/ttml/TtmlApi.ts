import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import TtmlExtract from '../../../../../models/TtmlExtract';
import PaginationResponse from '../../../../../models/PaginationResponse';
import TtmlExtractListQueryParams from './TtmlExtractListQueryParams';

/**
 * TtmlApi - object-oriented interface
 * @export
 * @class TtmlApi
 * @extends {BaseAPI}
 */
export default class TtmlApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Extract TTML Captions
   * @param {string} encodingId Id of the encoding.
   * @param {TtmlExtract} [ttmlExtract] The TTML extract captions to be created
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public create(encodingId: string, ttmlExtract?: TtmlExtract): Promise<TtmlExtract> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<TtmlExtract>('/encoding/encodings/{encoding_id}/captions/extract/ttml', pathParamMap, ttmlExtract).then((response) => {
      return new TtmlExtract(response);
    });
  }

  /**
   * @summary Delete TTML Extract Captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the captions configuration.
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public delete(encodingId: string, captionsId: string): Promise<TtmlExtract> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.delete<TtmlExtract>('/encoding/encodings/{encoding_id}/captions/extract/ttml/{captions_id}', pathParamMap).then((response) => {
      return new TtmlExtract(response);
    });
  }

  /**
   * @summary TTML Extract Captions Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the captions.
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public get(encodingId: string, captionsId: string): Promise<TtmlExtract> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.get<TtmlExtract>('/encoding/encodings/{encoding_id}/captions/extract/ttml/{captions_id}', pathParamMap).then((response) => {
      return new TtmlExtract(response);
    });
  }

  /**
   * @summary List TTML Extract Captions
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof TtmlApi
   */
  public list(encodingId: string, queryParams?: TtmlExtractListQueryParams): Promise<PaginationResponse<TtmlExtract>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<TtmlExtract>>('/encoding/encodings/{encoding_id}/captions/extract/ttml', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<TtmlExtract>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new TtmlExtract(i));
      }
      return paginationResponse;
    });
  }
}
