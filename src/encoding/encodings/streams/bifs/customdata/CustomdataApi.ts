import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
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
   * @summary Bif Custom Data
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} bifId Id of the Bif configuration.
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, streamId: string, bifId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      bif_id: bifId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/streams/{stream_id}/bifs/{bif_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
