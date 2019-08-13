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
export class Drm extends BitmovinResource {

  protected static readonly typeMap: any = {
    'WIDEVINE': 'WidevineDrm',
    'PLAYREADY': 'PlayReadyDrm',
    'PRIMETIME': 'PrimeTimeDrm',
    'FAIRPLAY': 'FairPlayDrm',
    'MARLIN': 'MarlinDrm',
    'CLEARKEY': 'ClearKeyDrm',
    'AES': 'AesEncryptionDrm',
    'CENC': 'CencDrm'
  };

  /**
   * @type {EncodingOutput[]}
   * @memberof Drm
   */
  public outputs?: EncodingOutput[];

  constructor(obj: Partial<Drm>) {
    super(obj);
    this.outputs = map<EncodingOutput>(obj.outputs, EncodingOutput);
  }
}

export default Drm;

