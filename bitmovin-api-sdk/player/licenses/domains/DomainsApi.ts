import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Domain from '../../../models/Domain';
import PaginationResponse from '../../../models/PaginationResponse';

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
   * @param {string} licenseId Id of the Player License
   * @param {Domain} [domain] The Domain to be added to Player License Whitelist
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public create(licenseId: string, domain?: Domain): Promise<Domain> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.post<Domain>('/player/licenses/{license_id}/domains', pathParamMap, domain).then((response) => {
      return new Domain(response);
    });
  }

  /**
   * @summary Delete Domain
   * @param {string} licenseId Id of license
   * @param {string} domainId Id of the domain
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public delete(licenseId: string, domainId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      license_id: licenseId,
      domain_id: domainId
    };
    return this.restClient.delete<BitmovinResponse>('/player/licenses/{license_id}/domains/{domain_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary List allowed Domains for Player License
   * @param {string} licenseId Id of the Player License
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public list(licenseId: string): Promise<PaginationResponse<Domain>> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<PaginationResponse<Domain>>('/player/licenses/{license_id}/domains', pathParamMap).then((response) => {
      const paginationResponse = new PaginationResponse<Domain>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new Domain(i));
      }
      return paginationResponse;
    });
  }
}
