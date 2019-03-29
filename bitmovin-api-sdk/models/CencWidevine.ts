import {map} from '../common/Mapper';

/**
 * @export
 * @class CencWidevine
 */
export default class CencWidevine {
  constructor(obj: any) {
    this.pssh = map(obj.pssh);
  }

  /**
   * Base64 encoded pssh payload
   * @type {string}
   * @memberof CencWidevine
   */
  public pssh: string;
}
