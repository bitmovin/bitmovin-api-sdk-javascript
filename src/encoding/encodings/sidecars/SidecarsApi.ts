import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import WebvttApi from './webvtt/WebvttApi';
import BitmovinResponse from '../../../models/BitmovinResponse';
import SidecarFile from '../../../models/SidecarFile';
import PaginationResponse from '../../../models/PaginationResponse';
import SidecarFileListQueryParams from './SidecarFileListQueryParams';

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
   * @param {SidecarFile} sidecarFile
   * @throws {RequiredError}
   * @memberof SidecarsApi
   */
  public create(encodingId: string, sidecarFile?: SidecarFile): Promise<SidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<SidecarFile>('/encoding/encodings/{encoding_id}/sidecars', pathParamMap, sidecarFile).then((response) => {
      return new SidecarFile(response);
    });
  }

  /**
   * @summary Delete Sidecar
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {RequiredError}
   * @memberof SidecarsApi
   */
  public delete(encodingId: string, sidecarId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/sidecars/{sidecar_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Sidecar Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {RequiredError}
   * @memberof SidecarsApi
   */
  public get(encodingId: string, sidecarId: string): Promise<SidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.get<SidecarFile>('/encoding/encodings/{encoding_id}/sidecars/{sidecar_id}', pathParamMap).then((response) => {
      return new SidecarFile(response);
    });
  }

  /**
   * @summary List Sidecars
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof SidecarsApi
   */
  public list(encodingId: string, queryParams?: SidecarFileListQueryParams): Promise<PaginationResponse<SidecarFile>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<PaginationResponse<SidecarFile>>('/encoding/encodings/{encoding_id}/sidecars', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<SidecarFile>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new SidecarFile(i));
      }
      return paginationResponse;
    });
  }
}
