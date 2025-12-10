import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import LiveEncodingHeartbeat from '../../../../models/LiveEncodingHeartbeat';

/**
 * HeartbeatApi - object-oriented interface
 * @export
 * @class HeartbeatApi
 * @extends {BaseAPI}
 */
export default class HeartbeatApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Live Encoding Heartbeat
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof HeartbeatApi
   */
  public get(encodingId: string): Promise<LiveEncodingHeartbeat> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<LiveEncodingHeartbeat>('/encoding/encodings/{encoding_id}/live/heartbeat', pathParamMap).then((response) => {
      return map(response, LiveEncodingHeartbeat);
    });
  }
}
