import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomData from '../../../../../models/CustomData';

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
   * @summary Convert SCC captions Custom Data
   * @param {string} encodingId Id of the encoding.
   * @param {string} captionsId Id of the caption.
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, captionsId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      captions_id: captionsId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/captions/scc/{captions_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}
