import {map, mapArray} from '../common/Mapper';
import InputFactorBitrate from './InputFactorBitrate';
import InputFactorCodec from './InputFactorCodec';

/**
 * @export
 * @class InputFactor
 */
export class InputFactor {
  /**
   * @type {InputFactorCodec}
   * @memberof InputFactor
   */
  public codec?: InputFactorCodec;

  /**
   * @type {InputFactorBitrate}
   * @memberof InputFactor
   */
  public bitrate?: InputFactorBitrate;

  constructor(obj?: Partial<InputFactor>) {
    if(!obj) {
      return;
    }
    this.codec = map(obj.codec, InputFactorCodec);
    this.bitrate = map(obj.bitrate, InputFactorBitrate);
  }
}

export default InputFactor;

