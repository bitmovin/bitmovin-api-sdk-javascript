import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import AdaptationSetTypeResponse from '../../../../../../models/AdaptationSetTypeResponse';

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
   * @summary Get Input Type
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the input
   * @throws {BitmovinError}
   * @memberof TypeApi
   */
  public get(manifestId: string, periodId: string, adaptationsetId: string): Promise<AdaptationSetTypeResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    return this.restClient.get<AdaptationSetTypeResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/type', pathParamMap).then((response) => {
      return map(response, AdaptationSetTypeResponse);
    });
  }
}
