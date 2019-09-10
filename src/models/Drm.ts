import {map, mapArray} from '../common/Mapper';
import AesEncryptionDrm from './AesEncryptionDrm';
import BitmovinResource from './BitmovinResource';
import CencDrm from './CencDrm';
import ClearKeyDrm from './ClearKeyDrm';
import DrmType from './DrmType';
import EncodingOutput from './EncodingOutput';
import FairPlayDrm from './FairPlayDrm';
import MarlinDrm from './MarlinDrm';
import PlayReadyDrm from './PlayReadyDrm';
import PrimeTimeDrm from './PrimeTimeDrm';
import WidevineDrm from './WidevineDrm';

export type DrmUnion =
  WidevineDrm |
  PlayReadyDrm |
  PrimeTimeDrm |
  FairPlayDrm |
  MarlinDrm |
  ClearKeyDrm |
  AesEncryptionDrm |
  CencDrm;

/**
 * @export
 * @class Drm
 */
export class Drm extends BitmovinResource {
  protected static readonly _discriminatorName = 'type';
  protected static readonly _discriminatorMapping: { [key in keyof typeof DrmType]: string; } = {
    WIDEVINE: 'WidevineDrm',
    PLAYREADY: 'PlayReadyDrm',
    PRIMETIME: 'PrimeTimeDrm',
    FAIRPLAY: 'FairPlayDrm',
    MARLIN: 'MarlinDrm',
    CLEARKEY: 'ClearKeyDrm',
    AES: 'AesEncryptionDrm',
    CENC: 'CencDrm'
  };

  /**
   * @type {EncodingOutput[]}
   * @memberof Drm
   */
  public outputs?: EncodingOutput[];

  constructor(obj?: Partial<Drm>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.outputs = mapArray(obj.outputs, EncodingOutput);
  }
}

export default Drm;

