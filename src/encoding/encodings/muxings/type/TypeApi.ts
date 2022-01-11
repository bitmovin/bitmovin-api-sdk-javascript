import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import MuxingTypeResponse from '../../../../models/MuxingTypeResponse';

/**
 * TypeApi - object-oriented interface
 * @export
 * @class TypeApi
 * @extends {BaseAPI}
 */
export default class TypeApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Muxing type
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the muxing.
   * @throws {BitmovinError}
   * @memberof TypeApi
   */
  public get(encodingId: string, muxingId: string): Promise<MuxingTypeResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<MuxingTypeResponse>('/encoding/encodings/{encoding_id}/muxings/{muxing_id}/type', pathParamMap).then((response) => {
      return map(response, MuxingTypeResponse);
    });
  }
}
