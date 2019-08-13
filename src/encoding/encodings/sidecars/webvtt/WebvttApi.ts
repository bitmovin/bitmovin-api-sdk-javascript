import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import WebVttSidecarFile from '../../../../models/WebVttSidecarFile';
import {getType, map} from '../../../../common/Mapper';

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
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public create(encodingId: string, webVttSidecarFile?: WebVttSidecarFile): Promise<WebVttSidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<WebVttSidecarFile>('/encoding/encodings/{encoding_id}/sidecars/webvtt', pathParamMap, webVttSidecarFile).then((response) => {
      return new WebVttSidecarFile(response);
    });
  }

  /**
   * @summary Delete Sidecar
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public delete(encodingId: string, sidecarId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/sidecars/webvtt/{sidecar_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary WebVTT Sidecar Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {RequiredError}
   * @memberof WebvttApi
   */
  public get(encodingId: string, sidecarId: string): Promise<WebVttSidecarFile> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.get<WebVttSidecarFile>('/encoding/encodings/{encoding_id}/sidecars/webvtt/{sidecar_id}', pathParamMap).then((response) => {
      return new WebVttSidecarFile(response);
    });
  }
}
