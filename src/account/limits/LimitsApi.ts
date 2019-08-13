import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import ResourceLimitContainer from '../../models/ResourceLimitContainer';
import PaginationResponse from '../../models/PaginationResponse';
import {getType, map} from '../../common/Mapper';

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
   * @throws {RequiredError}
   * @memberof LimitsApi
   */
  public list(): Promise<PaginationResponse<ResourceLimitContainer>> {
    return this.restClient.get<PaginationResponse<ResourceLimitContainer>>('/account/limits', {}).then((response) => {
      const paginationResponse = new PaginationResponse<ResourceLimitContainer>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ResourceLimitContainer(i));
      }
      return paginationResponse;
    });
  }
}
