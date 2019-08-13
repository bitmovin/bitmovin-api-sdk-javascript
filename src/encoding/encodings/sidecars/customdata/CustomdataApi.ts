import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomData from '../../../../models/CustomData';
import {getType, map} from '../../../../common/Mapper';

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
   * @summary Sidecar Custom Data
   * @param {string} encodingId Id of the encoding.
   * @param {string} sidecarId Id of the sidecar.
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, sidecarId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      sidecar_id: sidecarId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/sidecars/{sidecar_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
