import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CustomData from '../../../../models/CustomData';

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
   * @summary Stream Custom Data
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, streamId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/streams/{stream_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
