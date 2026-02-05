import {map, mapArray} from '../common/Mapper';
import DolbyAtmosDynamicRangeCompressionMode from './DolbyAtmosDynamicRangeCompressionMode';

/**
 * @export
 * @class DolbyAtmosDynamicRangeCompression
 */
export class DolbyAtmosDynamicRangeCompression {
  /**
   * Line mode is intended for use in products providing line‐level or speaker‐level outputs, and is applicable to the widest range of products. Products such as set‐top boxes, DVD players, DTVs, A/V surround decoders, and outboard Dolby Atmos decoders typically use this mode.
   * @type {DolbyAtmosDynamicRangeCompressionMode}
   * @memberof DolbyAtmosDynamicRangeCompression
   */
  public lineMode?: DolbyAtmosDynamicRangeCompressionMode;

  /**
   * RF mode is intended for products such as a low‐cost television receivers.
   * @type {DolbyAtmosDynamicRangeCompressionMode}
   * @memberof DolbyAtmosDynamicRangeCompression
   */
  public rfMode?: DolbyAtmosDynamicRangeCompressionMode;

  constructor(obj?: Partial<DolbyAtmosDynamicRangeCompression>) {
    if(!obj) {
      return;
    }
    this.lineMode = map(obj.lineMode);
    this.rfMode = map(obj.rfMode);
  }
}

export default DolbyAtmosDynamicRangeCompression;

