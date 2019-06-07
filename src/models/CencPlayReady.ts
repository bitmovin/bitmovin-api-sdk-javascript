import {map} from '../common/Mapper';

/**
 * @export
 * @class CencPlayReady
 */
export class CencPlayReady {
  constructor(obj: any) {
    this.laUrl = map(obj.laUrl);
    this.pssh = map(obj.pssh);
  }

  /**
   * Url of the license server. Either the laUrl or the pssh needs to be provided.
   * @type {string}
   * @memberof CencPlayReady
   */
  public laUrl?: string;
  /**
   * Base64 encoded pssh payload.
   * @type {string}
   * @memberof CencPlayReady
   */
  public pssh?: string;
}

export default CencPlayReady;

