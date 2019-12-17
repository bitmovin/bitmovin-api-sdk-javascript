import {map, mapArray} from '../common/Mapper';
import PlayReadyAdditionalInformation from './PlayReadyAdditionalInformation';

/**
 * @export
 * @class CencPlayReady
 */
export class CencPlayReady {
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

  /**
   * @type {PlayReadyAdditionalInformation}
   * @memberof CencPlayReady
   */
  public additionalInformation?: PlayReadyAdditionalInformation;

  constructor(obj?: Partial<CencPlayReady>) {
    if(!obj) {
      return;
    }
    this.laUrl = map(obj.laUrl);
    this.pssh = map(obj.pssh);
    this.additionalInformation = map(obj.additionalInformation, PlayReadyAdditionalInformation);
  }
}

export default CencPlayReady;

