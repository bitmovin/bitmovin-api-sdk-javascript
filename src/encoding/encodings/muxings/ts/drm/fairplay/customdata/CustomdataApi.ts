import {BaseAPI} from '../../../../../../../common/BaseAPI';
import Configuration from '../../../../../../../common/Configuration';
import CustomData from '../../../../../../../models/CustomData';

/**
 * CustomdataApi - object-oriented interface
 * @export
 * @class CustomdataApi
 * @extends {BaseAPI}
 */
export default class CustomdataApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary FairPlay DRM Custom Data of TS Segment
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the ts segment.
   * @param {string} drmId Id of the FairPlay DRM configuration.
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, muxingId: string, drmId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      drm_id: drmId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/muxings/ts/{muxing_id}/drm/fairplay/{drm_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
