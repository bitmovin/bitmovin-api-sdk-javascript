import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class PoisEndpointCredentials
 */
export class PoisEndpointCredentials {
  /**
   * The username required to authenticate with the POIS server. 
   * @type {string}
   * @memberof PoisEndpointCredentials
   */
  public username?: string;

  /**
   * The password required for authentication with the POIS server. 
   * @type {string}
   * @memberof PoisEndpointCredentials
   */
  public password?: string;

  constructor(obj?: Partial<PoisEndpointCredentials>) {
    if(!obj) {
      return;
    }
    this.username = map(obj.username);
    this.password = map(obj.password);
  }
}

export default PoisEndpointCredentials;

