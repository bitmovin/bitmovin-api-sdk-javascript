import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import LiveEncodingHeartbeatUrlResponse from '../../../../models/LiveEncodingHeartbeatUrlResponse';

/**
 * HeartbeatFinalApi - object-oriented interface
 * @export
 * @class HeartbeatFinalApi
 * @extends {BaseAPI}
 */
export default class HeartbeatFinalApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Final Live Encoding Heartbeat Download URL
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof HeartbeatFinalApi
   */
  public get(encodingId: string): Promise<LiveEncodingHeartbeatUrlResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<LiveEncodingHeartbeatUrlResponse>('/encoding/encodings/{encoding_id}/live/heartbeat-final', pathParamMap).then((response) => {
      return map(response, LiveEncodingHeartbeatUrlResponse);
    });
  }
}
