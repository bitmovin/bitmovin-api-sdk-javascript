import {map} from '../common/Mapper';
import PlayerThirdPartyLicensingErrorAction from './PlayerThirdPartyLicensingErrorAction';

/**
 * @export
 * @class PlayerThirdPartyLicensing
 */
export default class PlayerThirdPartyLicensing {
  constructor(obj: any) {
    this.licenseCheckServer = map(obj.licenseCheckServer);
    this.licenseCheckTimeout = map(obj.licenseCheckTimeout);
    this.errorAction = map(obj.errorAction);
    this.timeoutAction = map(obj.timeoutAction);
  }

  /**
   * URL to your license check server
   * @type {string}
   * @memberof PlayerThirdPartyLicensing
   */
  public licenseCheckServer: string;
  /**
   * Timeout in ms
   * @type {number}
   * @memberof PlayerThirdPartyLicensing
   */
  public licenseCheckTimeout: number;
  /**
   * Specify if the Licensing Request should fail or not on Third Party Licensing Error
   * @type {PlayerThirdPartyLicensingErrorAction}
   * @memberof PlayerThirdPartyLicensing
   */
  public errorAction: PlayerThirdPartyLicensingErrorAction;
  /**
   * Specify if the Licensing Request should fail or not on Third Party Licensing timeout
   * @type {PlayerThirdPartyLicensingErrorAction}
   * @memberof PlayerThirdPartyLicensing
   */
  public timeoutAction: PlayerThirdPartyLicensingErrorAction;
}
