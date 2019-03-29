import {map} from '../common/Mapper';

/**
 * @export
 * @class CencFairPlay
 */
export default class CencFairPlay {
  constructor(obj: any) {
    this.iv = map(obj.iv);
    this.uri = map(obj.uri);
  }

  /**
   * Initialization vector as hexadecimal string
   * @type {string}
   * @memberof CencFairPlay
   */
  public iv?: string;
  /**
   * URL of the licensing server
   * @type {string}
   * @memberof CencFairPlay
   */
  public uri?: string;
}
