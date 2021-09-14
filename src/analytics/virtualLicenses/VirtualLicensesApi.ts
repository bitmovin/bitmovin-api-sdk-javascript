import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import VirtualLicense from '../../models/VirtualLicense';
import VirtualLicenseCreateRequest from '../../models/VirtualLicenseCreateRequest';

/**
 * VirtualLicensesApi - object-oriented interface
 * @export
 * @class VirtualLicensesApi
 * @extends {BaseAPI}
 */
export default class VirtualLicensesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Virtual License
   * @param {VirtualLicenseCreateRequest} virtualLicenseCreateRequest Virtual License to be created
   * @throws {BitmovinError}
   * @memberof VirtualLicensesApi
   */
  public create(virtualLicenseCreateRequest?: VirtualLicenseCreateRequest): Promise<VirtualLicense> {
    return this.restClient.post<VirtualLicense>('/analytics/virtual-licenses', {}, virtualLicenseCreateRequest).then((response) => {
      return map(response, VirtualLicense);
    });
  }
}
