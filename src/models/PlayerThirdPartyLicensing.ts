import {map} from '../common/Mapper';
import PlayerThirdPartyLicensingErrorAction from './PlayerThirdPartyLicensingErrorAction';

/**
 * @export
 * @class PlayerThirdPartyLicensing
 */
export class PlayerThirdPartyLicensing {
  /**
   * URL to your license check server (required)
   * @type {string}
   * @memberof PlayerThirdPartyLicensing
   */
  public licenseCheckServer?: string;

  /**
   * Timeout in ms (required)
   * @type {number}
   * @memberof PlayerThirdPartyLicensing
   */
  public licenseCheckTimeout?: number;

  /**
   * Specify if the Licensing Request should fail or not on Third Party Licensing Error (required)
   * @type {PlayerThirdPartyLicensingErrorAction}
   * @memberof PlayerThirdPartyLicensing
   */
  public errorAction?: PlayerThirdPartyLicensingErrorAction;

  /**
   * Specify if the Licensing Request should fail or not on Third Party Licensing timeout (required)
   * @type {PlayerThirdPartyLicensingErrorAction}
   * @memberof PlayerThirdPartyLicensing
   */
  public timeoutAction?: PlayerThirdPartyLicensingErrorAction;

  constructor(obj: Partial<PlayerThirdPartyLicensing>) {

    this.licenseCheckServer = obj.licenseCheckServer;
    this.licenseCheckTimeout = obj.licenseCheckTimeout;
    this.errorAction = obj.errorAction;
    this.timeoutAction = obj.timeoutAction;
  }
}

export default PlayerThirdPartyLicensing;

