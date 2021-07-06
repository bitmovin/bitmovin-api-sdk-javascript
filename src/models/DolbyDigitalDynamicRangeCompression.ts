import {map, mapArray} from '../common/Mapper';
import DolbyDigitalDynamicRangeCompressionMode from './DolbyDigitalDynamicRangeCompressionMode';

/**
 * @export
 * @class DolbyDigitalDynamicRangeCompression
 */
export class DolbyDigitalDynamicRangeCompression {
  /**
   * Line mode is intended for use in products providing line‐level or speaker‐level outputs, and is applicable to the widest range of products. Products such as set‐top boxes, DVD players, DTVs, A/V surround decoders, and outboard Dolby Digital decoders typically use this mode.
   * @type {DolbyDigitalDynamicRangeCompressionMode}
   * @memberof DolbyDigitalDynamicRangeCompression
   */
  public lineMode?: DolbyDigitalDynamicRangeCompressionMode;

  /**
   * RF mode is intended for products such as a low‐cost television receivers.
   * @type {DolbyDigitalDynamicRangeCompressionMode}
   * @memberof DolbyDigitalDynamicRangeCompression
   */
  public rfMode?: DolbyDigitalDynamicRangeCompressionMode;

  constructor(obj?: Partial<DolbyDigitalDynamicRangeCompression>) {
    if(!obj) {
      return;
    }
    this.lineMode = map(obj.lineMode);
    this.rfMode = map(obj.rfMode);
  }
}

export default DolbyDigitalDynamicRangeCompression;

