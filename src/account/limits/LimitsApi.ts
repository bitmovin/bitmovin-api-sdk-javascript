import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import ResourceLimitContainer from '../../models/ResourceLimitContainer';
import PaginationResponse from '../../models/PaginationResponse';

/**
 * LimitsApi - object-oriented interface
 * @export
 * @class LimitsApi
 * @extends {BaseAPI}
 */
export default class LimitsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Organization Limits
   * @throws {BitmovinError}
   * @memberof LimitsApi
   */
  public list(): Promise<PaginationResponse<ResourceLimitContainer>> {
    return this.restClient.get<PaginationResponse<ResourceLimitContainer>>('/account/limits', {}).then((response) => {
      return new PaginationResponse<ResourceLimitContainer>(response, ResourceLimitContainer);
    });
  }
}
