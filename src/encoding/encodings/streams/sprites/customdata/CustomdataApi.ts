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
   * @summary Sprite Custom Data
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {string} spriteId Id of the sprite configuration.
   * @throws {BitmovinError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, streamId: string, spriteId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId,
      sprite_id: spriteId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/streams/{stream_id}/sprites/{sprite_id}/customData', pathParamMap).then((response) => {
      return map(response, CustomData);
    });
  }
}
