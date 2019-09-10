import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomPlayerBuildStatus from '../../../../models/CustomPlayerBuildStatus';

/**
 * StatusApi - object-oriented interface
 * @export
 * @class StatusApi
 * @extends {BaseAPI}
 */
export default class StatusApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Custom Web Player Build Status
   * @param {string} customBuildId Id of the custom player build
   * @throws {BitmovinError}
   * @memberof StatusApi
   */
  public get(customBuildId: string): Promise<CustomPlayerBuildStatus> {
    const pathParamMap = {
      custom_build_id: customBuildId
    };
    return this.restClient.get<CustomPlayerBuildStatus>('/player/custom-builds/web/{custom_build_id}/status', pathParamMap).then((response) => {
      return map(response, CustomPlayerBuildStatus);
    });
  }
}
