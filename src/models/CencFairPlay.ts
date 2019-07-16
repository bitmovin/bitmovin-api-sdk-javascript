import {map} from '../common/Mapper';

/**
 * @export
 * @class CencFairPlay
 */
export class CencFairPlay {
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

  constructor(obj: Partial<CencFairPlay>) {
    this.iv = map(obj.iv);
    this.uri = map(obj.uri);
  }
}

export default CencFairPlay;

