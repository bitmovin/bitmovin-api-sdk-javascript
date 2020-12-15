import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import WebVttSidecarFile from '../../../../models/WebVttSidecarFile';
import PaginationResponse from '../../../../models/PaginationResponse';
import {WebVttSidecarFileListQueryParams, WebVttSidecarFileListQueryParamsBuilder} from './WebVttSidecarFileListQueryParams';

/**
 * WebvttApi - object-oriented interface
 * @export
 * @class WebvttApi
 * @extends {BaseAPI}
 */
export default class WebvttApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add WebVTT sidecar file
   * @param {string} encodingId Id of the encoding.
   * @param {WebVttSidecarFile} webVttSidecarFile The WebVTT Sidecar file to be added
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public create(encodingId: string, webVttSidecarFile?: WebVttSidecarFile): Promise<WebVttSidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<WebVttSidecarFile>('/encoding/encodings/{encoding_id}/sidecars/webvtt', pathParamMap, webVttSidecarFile).then((response) => {
      return map(response, WebVttSidecarFile);
    });
  }

  /**
   * @summary Delete Sidecar
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public delete(encodingId: string, sidecarId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/sidecars/webvtt/{sidecar_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary WebVTT Sidecar Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public get(encodingId: string, sidecarId: string): Promise<WebVttSidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.get<WebVttSidecarFile>('/encoding/encodings/{encoding_id}/sidecars/webvtt/{sidecar_id}', pathParamMap).then((response) => {
      return map(response, WebVttSidecarFile);
    });
  }

  /**
   * @summary List WebVTT sidecar files
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof WebvttApi
   */
  public list(encodingId: string, queryParameters?: WebVttSidecarFileListQueryParams | ((q: WebVttSidecarFileListQueryParamsBuilder) => WebVttSidecarFileListQueryParamsBuilder)): Promise<PaginationResponse<WebVttSidecarFile>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: WebVttSidecarFileListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new WebVttSidecarFileListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<WebVttSidecarFile>>('/encoding/encodings/{encoding_id}/sidecars/webvtt', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<WebVttSidecarFile>(response, WebVttSidecarFile);
    });
  }
}
