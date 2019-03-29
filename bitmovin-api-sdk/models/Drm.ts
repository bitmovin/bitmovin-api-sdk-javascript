import {map} from '../common/Mapper';
import AesEncryptionDrm from './AesEncryptionDrm';
import BitmovinResource from './BitmovinResource';
import CencDrm from './CencDrm';
import ClearKeyDrm from './ClearKeyDrm';
import EncodingOutput from './EncodingOutput';
import FairPlayDrm from './FairPlayDrm';
import MarlinDrm from './MarlinDrm';
import PlayReadyDrm from './PlayReadyDrm';
import PrimeTimeDrm from './PrimeTimeDrm';
import WidevineDrm from './WidevineDrm';

/**
 * @export
 * @class Drm
 */
export default class Drm extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
  }

  /**
   * @type {Array<EncodingOutput>}
   * @memberof Drm
   */
  public outputs?: Array<EncodingOutput>;
}
