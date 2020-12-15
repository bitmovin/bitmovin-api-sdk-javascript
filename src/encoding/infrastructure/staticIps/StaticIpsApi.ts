import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import BitmovinResponse from '../../../models/BitmovinResponse';
import StaticIp from '../../../models/StaticIp';
import PaginationResponse from '../../../models/PaginationResponse';
import {StaticIpListQueryParams, StaticIpListQueryParamsBuilder} from './StaticIpListQueryParams';

/**
 * StaticIpsApi - object-oriented interface
 * @export
 * @class StaticIpsApi
 * @extends {BaseAPI}
 */
export default class StaticIpsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Static IP Address
   * @param {StaticIp} staticIp The static ip to be created
   * @throws {BitmovinError}
   * @memberof StaticIpsApi
   */
  public create(staticIp?: StaticIp): Promise<StaticIp> {
    return this.restClient.post<StaticIp>('/encoding/infrastructure/static-ips', {}, staticIp).then((response) => {
      return map(response, StaticIp);
    });
  }

  /**
   * @summary Delete Static IP Address
   * @param {string} id Id of the Static IP Address
   * @throws {BitmovinError}
   * @memberof StaticIpsApi
   */
  public delete(id: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      id: id
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/infrastructure/static-ips/{id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Static IP Address Details
   * @param {string} id Id of the Static IP Address
   * @throws {BitmovinError}
   * @memberof StaticIpsApi
   */
  public get(id: string): Promise<StaticIp> {
    const pathParamMap = {
      id: id
    };
    return this.restClient.get<StaticIp>('/encoding/infrastructure/static-ips/{id}', pathParamMap).then((response) => {
      return map(response, StaticIp);
    });
  }

  /**
   * @summary List all Static IP Addresses
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof StaticIpsApi
   */
  public list(queryParameters?: StaticIpListQueryParams | ((q: StaticIpListQueryParamsBuilder) => StaticIpListQueryParamsBuilder)): Promise<PaginationResponse<StaticIp>> {
    let queryParams: StaticIpListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new StaticIpListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<StaticIp>>('/encoding/infrastructure/static-ips', {}, queryParams).then((response) => {
      return new PaginationResponse<StaticIp>(response, StaticIp);
    });
  }
}
