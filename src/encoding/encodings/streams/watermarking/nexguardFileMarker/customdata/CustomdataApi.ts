import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import CustomData from '../../../../../../models/CustomData';

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
   * @summary Nexguard file marker watermarking configuration Custom Data
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} nexguardId Id of the nexguard file marker watermarking configuration.
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, streamId: string, nexguardId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      nexguard_id: nexguardId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/streams/{stream_id}/watermarking/nexguard-file-marker/{nexguard_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
