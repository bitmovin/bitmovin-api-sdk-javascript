import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import CaptionsCea from '../../../../models/CaptionsCea';
import PaginationResponse from '../../../../models/PaginationResponse';
import CaptionsCeaListQueryParams from './CaptionsCeaListQueryParams';

/**
 * CeaApi - object-oriented interface
 * @export
 * @class CeaApi
 * @extends {BaseAPI}
 */
export default class CeaApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Extract CEA 608/708 Captions
   * @param {string} encodingId Id of the encoding.
   * @param {CaptionsCea} [captionsCea] The CEA 608/708 captions to be created
   * @throws {RequiredError}
   * @memberof CeaApi
   */
  public create(encodingId: string, captionsCea?: CaptionsCea): Promise<CaptionsCea> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<CaptionsCea>('/encoding/encodings/{encoding_id}/captions/cea', pathParamMap, captionsCea).then((response) => {
      return new CaptionsCea(response);
    });
  }

  /**
   * @summary Delete CEA 608/708 Captions
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the captions configuration.
   * @throws {RequiredError}
   * @memberof CeaApi
   */
  public delete(encodingId: string, captionsId: string): Promise<CaptionsCea> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.delete<CaptionsCea>('/encoding/encodings/{encoding_id}/captions/cea/{captions_id}', pathParamMap).then((response) => {
      return new CaptionsCea(response);
    });
  }

  /**
   * @summary CEA 608/708 Captions Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the captions.
   * @throws {RequiredError}
   * @memberof CeaApi
   */
  public get(encodingId: string, captionsId: string): Promise<CaptionsCea> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.get<CaptionsCea>('/encoding/encodings/{encoding_id}/captions/cea/{captions_id}', pathParamMap).then((response) => {
      return new CaptionsCea(response);
    });
  }

  /**
   * @summary List CEA 608/708 Captions
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof CeaApi
   */
  public list(encodingId: string, queryParams?: CaptionsCeaListQueryParams): Promise<PaginationResponse<CaptionsCea>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<CaptionsCea>>('/encoding/encodings/{encoding_id}/captions/cea', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<CaptionsCea>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new CaptionsCea(i));
      }
      return paginationResponse;
    });
  }
}
