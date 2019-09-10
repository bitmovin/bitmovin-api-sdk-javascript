import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import WebvttApi from './webvtt/WebvttApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import SidecarFile from '../../../models/SidecarFile';
import PaginationResponse from '../../../models/PaginationResponse';
import {SidecarFileListQueryParams, SidecarFileListQueryParamsBuilder} from './SidecarFileListQueryParams';

/**
 * SidecarsApi - object-oriented interface
 * @export
 * @class SidecarsApi
 * @extends {BaseAPI}
 */
export default class SidecarsApi extends BaseAPI {
  public customdata: CustomdataApi;
  public webvtt: WebvttApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.webvtt = new WebvttApi(configuration);
  }

  /**
   * @summary Add Sidecar
   * @param {string} encodingId Id of the encoding.
   * @param {SidecarFile} sidecarFile The Sidecar to be added
   * @throws {BitmovinError}
   * @memberof SidecarsApi
   */
  public create(encodingId: string, sidecarFile?: SidecarFile): Promise<SidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<SidecarFile>('/encoding/encodings/{encoding_id}/sidecars', pathParamMap, sidecarFile).then((response) => {
      return map(response, SidecarFile);
    });
  }

  /**
   * @summary Delete Sidecar
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {BitmovinError}
   * @memberof SidecarsApi
   */
  public delete(encodingId: string, sidecarId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/sidecars/{sidecar_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Sidecar Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {BitmovinError}
   * @memberof SidecarsApi
   */
  public get(encodingId: string, sidecarId: string): Promise<SidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.get<SidecarFile>('/encoding/encodings/{encoding_id}/sidecars/{sidecar_id}', pathParamMap).then((response) => {
      return map(response, SidecarFile);
    });
  }

  /**
   * @summary List Sidecars
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof SidecarsApi
   */
  public list(encodingId: string, queryParameters?: SidecarFileListQueryParams | ((q: SidecarFileListQueryParamsBuilder) => SidecarFileListQueryParamsBuilder)): Promise<PaginationResponse<SidecarFile>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: SidecarFileListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new SidecarFileListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<SidecarFile>>('/encoding/encodings/{encoding_id}/sidecars', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<SidecarFile>(response, SidecarFile);
    });
  }
}
