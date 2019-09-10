import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import BitmovinResponse from '../../../models/BitmovinResponse';
import PlayerThirdPartyLicensing from '../../../models/PlayerThirdPartyLicensing';

/**
 * ThirdPartyLicensingApi - object-oriented interface
 * @export
 * @class ThirdPartyLicensingApi
 * @extends {BaseAPI}
 */
export default class ThirdPartyLicensingApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Enable Third Party Licensing
   * @param {string} licenseId Id of the Player License
   * @param {PlayerThirdPartyLicensing} playerThirdPartyLicensing Third Party Licensing settings to apply to Player License
   * @throws {BitmovinError}
   * @memberof ThirdPartyLicensingApi
   */
  public create(licenseId: string, playerThirdPartyLicensing?: PlayerThirdPartyLicensing): Promise<PlayerThirdPartyLicensing> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.post<PlayerThirdPartyLicensing>('/player/licenses/{license_id}/third-party-licensing', pathParamMap, playerThirdPartyLicensing).then((response) => {
      return map(response, PlayerThirdPartyLicensing);
    });
  }

  /**
   * @summary Delete Third Party Licensing Configuration
   * @param {string} licenseId Id of the Player License
   * @throws {BitmovinError}
   * @memberof ThirdPartyLicensingApi
   */
  public delete(licenseId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.delete<BitmovinResponse>('/player/licenses/{license_id}/third-party-licensing', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Third Party Licensing Configuration
   * @param {string} licenseId Id of the Player License
   * @throws {BitmovinError}
   * @memberof ThirdPartyLicensingApi
   */
  public get(licenseId: string): Promise<PlayerThirdPartyLicensing> {
    const pathParamMap = {
      license_id: licenseId
    };
    return this.restClient.get<PlayerThirdPartyLicensing>('/player/licenses/{license_id}/third-party-licensing', pathParamMap).then((response) => {
      return map(response, PlayerThirdPartyLicensing);
    });
  }
}
