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
   * @param {ResetLiveManifestTimeShift} resetLiveManifestTimeShift Removes older segments from live manifests. This resets or reduces the time-shift (DVR) window. The &#x60;residualPeriod&#x60; value determines how many seconds will remain in the time-shift window. The original time-shift window does not change. Newer segments will be added and not removed from the  manifest until the original time-shift duration is reached again.  Currently, only HLS live manifests are supported. 
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
