import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
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
   * @param {CustomWebPlayerBuildDomain} customWebPlayerBuildDomain
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public create(customWebPlayerBuildDomain?: CustomWebPlayerBuildDomain): Promise<CustomWebPlayerBuildDomain> {
    return this.restClient.post<CustomWebPlayerBuildDomain>('/player/custom-builds/web/domains', {}, customWebPlayerBuildDomain).then((response) => {
      return new CustomWebPlayerBuildDomain(response);
    });
  }

  /**
   * @summary Delete Domain
   * @param {string} domainId Id of the domain
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public delete(domainId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      domain_id: domainId
    };
    return this.restClient.delete<BitmovinResponse>('/player/custom-builds/web/domains/{domain_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Get Domain Details
   * @param {string} domainId Id of the domain
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public get(domainId: string): Promise<CustomWebPlayerBuildDomain> {
    const pathParamMap = {
      domain_id: domainId
    };
    return this.restClient.get<CustomWebPlayerBuildDomain>('/player/custom-builds/web/domains/{domain_id}', pathParamMap).then((response) => {
      return new CustomWebPlayerBuildDomain(response);
    });
  }

  /**
   * @summary List Domain Details
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public list(): Promise<PaginationResponse<CustomWebPlayerBuildDomain>> {
    return this.restClient.get<PaginationResponse<CustomWebPlayerBuildDomain>>('/player/custom-builds/web/domains', {}).then((response) => {
      const paginationResponse = new PaginationResponse<CustomWebPlayerBuildDomain>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new CustomWebPlayerBuildDomain(i));
      }
      return paginationResponse;
    });
  }
}
