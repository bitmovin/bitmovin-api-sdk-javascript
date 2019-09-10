import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import CustomWebPlayerBuildDomain from '../../../../models/CustomWebPlayerBuildDomain';
import PaginationResponse from '../../../../models/PaginationResponse';

/**
 * DomainsApi - object-oriented interface
 * @export
 * @class DomainsApi
 * @extends {BaseAPI}
 */
export default class DomainsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Domain
   * @param {CustomWebPlayerBuildDomain} customWebPlayerBuildDomain The Domain to be added
   * @throws {BitmovinError}
   * @memberof DomainsApi
   */
  public create(customWebPlayerBuildDomain?: CustomWebPlayerBuildDomain): Promise<CustomWebPlayerBuildDomain> {
    return this.restClient.post<CustomWebPlayerBuildDomain>('/player/custom-builds/web/domains', {}, customWebPlayerBuildDomain).then((response) => {
      return map(response, CustomWebPlayerBuildDomain);
    });
  }

  /**
   * @summary Delete Domain
   * @param {string} domainId Id of the domain
   * @throws {BitmovinError}
   * @memberof DomainsApi
   */
  public delete(domainId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      domain_id: domainId
    };
    return this.restClient.delete<BitmovinResponse>('/player/custom-builds/web/domains/{domain_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Domain Details
   * @param {string} domainId Id of the domain
   * @throws {BitmovinError}
   * @memberof DomainsApi
   */
  public get(domainId: string): Promise<CustomWebPlayerBuildDomain> {
    const pathParamMap = {
      domain_id: domainId
    };
    return this.restClient.get<CustomWebPlayerBuildDomain>('/player/custom-builds/web/domains/{domain_id}', pathParamMap).then((response) => {
      return map(response, CustomWebPlayerBuildDomain);
    });
  }

  /**
   * @summary List Domain Details
   * @throws {BitmovinError}
   * @memberof DomainsApi
   */
  public list(): Promise<PaginationResponse<CustomWebPlayerBuildDomain>> {
    return this.restClient.get<PaginationResponse<CustomWebPlayerBuildDomain>>('/player/custom-builds/web/domains', {}).then((response) => {
      return new PaginationResponse<CustomWebPlayerBuildDomain>(response, CustomWebPlayerBuildDomain);
    });
  }
}
