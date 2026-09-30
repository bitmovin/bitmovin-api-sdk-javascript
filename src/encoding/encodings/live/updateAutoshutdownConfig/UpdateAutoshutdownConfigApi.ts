import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import LiveAutoShutdownConfiguration from '../../../../models/LiveAutoShutdownConfiguration';
import LiveAutoShutdownConfigurationUpdateRequest from '../../../../models/LiveAutoShutdownConfigurationUpdateRequest';
import LiveAutoShutdownConfigurationUpdateResponse from '../../../../models/LiveAutoShutdownConfigurationUpdateResponse';

/**
 * UpdateAutoshutdownConfigApi - object-oriented interface
 * @export
 * @class UpdateAutoshutdownConfigApi
 * @extends {BaseAPI}
 */
export default class UpdateAutoshutdownConfigApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Replace Live Auto Shutdown Configuration
   * @param {string} encodingId Id of the encoding.
   * @param {LiveAutoShutdownConfigurationUpdateRequest} liveAutoShutdownConfigurationUpdateRequest Applies a new auto shutdown configuration to a Live Encoding that is already running, without interrupting the stream.  **The body is a full replacement, not a partial update.** Every field that is omitted or set to &#x60;null&#x60; disarms the corresponding timer, and an empty body &#x60;{}&#x60; disarms all timers. Always send the complete configuration you want the encoding to run with, including the values you want to keep.  **&#x60;streamTimeoutMinutes&#x60; is counted from this call, not from the start of the encoding.** The encoding is stopped that many minutes after the update is accepted, whereas in the start request the same field is counted from when the encoding started. An encoding started at 12:00 with &#x60;streamTimeoutMinutes&#x60; of 120 is scheduled to stop at 14:00; updating it at 13:30 with &#x60;streamTimeoutMinutes&#x60; of 150 moves the shutdown to 16:00, not to 14:30. &#x60;bytesReadTimeoutSeconds&#x60; is relative by nature, as it always counts from the last byte received, and &#x60;waitingForFirstConnectTimeoutMinutes&#x60; has no effect once the input is connected.  The organization&#39;s maximum live encoding runtime still bounds the total runtime of the encoding, measured from the start of the encoding. An update that would push the shutdown past that limit is rejected rather than extending the encoding beyond it.  **Do not leave the call to the last few seconds.** The update is rejected with &#x60;409&#x60; when any armed shutdown timer is within 10 seconds of firing, because at that point the shutdown sequence is effectively already in flight. 
   * @throws {BitmovinError}
   * @memberof UpdateAutoshutdownConfigApi
   */
  public create(encodingId: string, liveAutoShutdownConfigurationUpdateRequest?: LiveAutoShutdownConfigurationUpdateRequest): Promise<LiveAutoShutdownConfigurationUpdateResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<LiveAutoShutdownConfigurationUpdateResponse>('/encoding/encodings/{encoding_id}/live/update-autoshutdown-config', pathParamMap, liveAutoShutdownConfigurationUpdateRequest).then((response) => {
      return map(response, LiveAutoShutdownConfigurationUpdateResponse);
    });
  }
}
