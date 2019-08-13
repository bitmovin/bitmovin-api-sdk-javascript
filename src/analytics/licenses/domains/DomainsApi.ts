import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import BitmovinResponse from '../../../models/BitmovinResponse';
import Domain from '../../../models/Domain';
import DomainList from '../../../models/DomainList';
import {getType, map} from '../../../common/Mapper';

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
   * @param {string} licenseId License id
   * @param {Domain} domain The domain to be added
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public create(licenseId: string, domain?: Domain): Promise<Domain> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.post<Domain>('/analytics/licenses/{license_id}/domains', pathParamMap, domain).then((response) => {
      return new Domain(response);
    });
  }

  /**
   * @summary Delete Domain
   * @param {string} licenseId License id
   * @param {string} domainId id of domain to delete
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public delete(licenseId: string, domainId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      license_id: licenseId,
      domain_id: domainId
    };
    return this.restClient.delete<BitmovinResponse>('/analytics/licenses/{license_id}/domains/{domain_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary List License Domains
   * @param {string} licenseId License id
   * @throws {RequiredError}
   * @memberof DomainsApi
   */
  public get(licenseId: string): Promise<DomainList> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<DomainList>('/analytics/licenses/{license_id}/domains', pathParamMap).then((response) => {
      return new DomainList(response);
    });
  }
}
