import {map, mapArray} from '../common/Mapper';
import DolbyDigitalPlusDynamicRangeCompressionMode from './DolbyDigitalPlusDynamicRangeCompressionMode';

/**
 * @export
 * @class DolbyDigitalPlusDynamicRangeCompression
 */
export class DolbyDigitalPlusDynamicRangeCompression {
  /**
   * Line mode is intended for use in products providing line‐level or speaker‐level outputs, and is applicable to the widest range of products.  Products such as set‐top boxes, DVD players, DTVs, A/V surround decoders, and outboard Dolby Digital decoders typically use this mode. 
   * @type {DolbyDigitalPlusDynamicRangeCompressionMode}
   * @memberof DolbyDigitalPlusDynamicRangeCompression
   */
  public lineMode?: DolbyDigitalPlusDynamicRangeCompressionMode;

  /**
   * RF mode is intended for products such as a low‐cost television receiver.
   * @type {DolbyDigitalPlusDynamicRangeCompressionMode}
   * @memberof DolbyDigitalPlusDynamicRangeCompression
   */
  public rfMode?: DolbyDigitalPlusDynamicRangeCompressionMode;

  constructor(obj?: Partial<DolbyDigitalPlusDynamicRangeCompression>) {
    if(!obj) {
      return;
    }
    this.lineMode = map(obj.lineMode);
    this.rfMode = map(obj.rfMode);
  }
}

export default DolbyDigitalPlusDynamicRangeCompression;

