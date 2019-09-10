import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BroadcastTsMuxingInformation from '../../../../../models/BroadcastTsMuxingInformation';

/**
 * InformationApi - object-oriented interface
 * @export
 * @class InformationApi
 * @extends {BaseAPI}
 */
export default class InformationApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Broadcast TS Muxing Information
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Broadcast TS Muxing
   * @throws {BitmovinError}
   * @memberof InformationApi
   */
  public get(encodingId: string, muxingId: string): Promise<BroadcastTsMuxingInformation> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<BroadcastTsMuxingInformation>('/encoding/encodings/{encoding_id}/muxings/broadcast-ts/{muxing_id}/information', pathParamMap).then((response) => {
      return map(response, BroadcastTsMuxingInformation);
    });
  }
}
