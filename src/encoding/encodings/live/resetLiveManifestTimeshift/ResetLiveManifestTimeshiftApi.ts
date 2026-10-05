import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import ResetLiveManifestTimeShift from '../../../../models/ResetLiveManifestTimeShift';

/**
 * ResetLiveManifestTimeshiftApi - object-oriented interface
 * @export
 * @class ResetLiveManifestTimeshiftApi
 * @extends {BaseAPI}
 */
export default class ResetLiveManifestTimeshiftApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Reset Live manifest time-shift
   * @param {string} encodingId Id of the encoding.
   * @param {ResetLiveManifestTimeShift} resetLiveManifestTimeShift Removes older segments from live manifests, resetting or reducing the time-shift (DVR) window. You can set &#x60;residualPeriodInSeconds&#x60; to specify how many seconds of content remain in the manifest after the reset, or &#x60;offsetInSeconds&#x60; to remove all segments before a position measured from the start of the live event. Do not set both parameters. If neither parameter is set, only the most recent segment remains. For DASH manifests that use SegmentTemplate, the duration retained by &#x60;residualPeriodInSeconds&#x60; (or when neither parameter is set) also includes the configured &#x60;liveEdgeOffset&#x60;. The configured time-shift window does not change. After the reset, new segments are added without removing older ones until the configured window duration is reached again. This operation supports HLS live manifests and, with encoder version 2.235.0 or later, DASH live manifests. The live encoding must have the &#x60;RUNNING&#x60; status. The request is processed asynchronously. 
   * @throws {BitmovinError}
   * @memberof ResetLiveManifestTimeshiftApi
   */
  public create(encodingId: string, resetLiveManifestTimeShift?: ResetLiveManifestTimeShift): Promise<ResetLiveManifestTimeShift> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ResetLiveManifestTimeShift>('/encoding/encodings/{encoding_id}/live/reset-live-manifest-timeshift', pathParamMap, resetLiveManifestTimeShift).then((response) => {
      return map(response, ResetLiveManifestTimeShift);
    });
  }
}
