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

    this.iv = obj.iv;
    this.uri = obj.uri;
  }
}

export default CencFairPlay;

