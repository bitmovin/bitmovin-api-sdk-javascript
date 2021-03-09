import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import AesEncryptionDrm from '../../../../../../models/AesEncryptionDrm';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {AesEncryptionDrmListQueryParams, AesEncryptionDrmListQueryParamsBuilder} from './AesEncryptionDrmListQueryParams';

/**
 * AesApi - object-oriented interface
 * @export
 * @class AesApi
 * @extends {BaseAPI}
 */
export default class AesApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add AES encryption configuration to the Packed Audio muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the packed audio muxing.
   * @param {AesEncryptionDrm} aesEncryptionDrm The AES encryption configuration to be created
   * @throws {BitmovinError}
   * @memberof AesApi
   */
  public create(encodingId: string, muxingId: string, aesEncryptionDrm?: AesEncryptionDrm): Promise<AesEncryptionDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<AesEncryptionDrm>('/encoding/encodings/{encoding_id}/muxings/packed-audio/{muxing_id}/drm/aes', pathParamMap, aesEncryptionDrm).then((response) => {
      return map(response, AesEncryptionDrm);
    });
  }

  /**
   * @summary Delete AES encryption configuration from a Packed Audio muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Packed Audio muxing.
   * @param {string} drmId Id of the AES encryption configuration.
   * @throws {BitmovinError}
   * @memberof AesApi
   */
  public delete(encodingId: string, muxingId: string, drmId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/packed-audio/{muxing_id}/drm/aes/{drm_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary AES encryption Details of a Packed Audio muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Packed Audio muxing.
   * @param {string} drmId Id of the AES encryption configuration.
   * @throws {BitmovinError}
   * @memberof AesApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<AesEncryptionDrm> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<AesEncryptionDrm>('/encoding/encodings/{encoding_id}/muxings/packed-audio/{muxing_id}/drm/aes/{drm_id}', pathParamMap).then((response) => {
      return map(response, AesEncryptionDrm);
    });
  }

  /**
   * @summary List AES encryption configurations of a Packed Audio muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Packed Audio muxing.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AesApi
   */
  public list(encodingId: string, muxingId: string, queryParameters?: AesEncryptionDrmListQueryParams | ((q: AesEncryptionDrmListQueryParamsBuilder) => AesEncryptionDrmListQueryParamsBuilder)): Promise<PaginationResponse<AesEncryptionDrm>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    let queryParams: AesEncryptionDrmListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AesEncryptionDrmListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AesEncryptionDrm>>('/encoding/encodings/{encoding_id}/muxings/packed-audio/{muxing_id}/drm/aes', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<AesEncryptionDrm>(response, AesEncryptionDrm);
    });
  }
}
