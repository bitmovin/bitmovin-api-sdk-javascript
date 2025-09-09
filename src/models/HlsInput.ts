import {map, mapArray} from '../common/Mapper';
import AdMarkersSource from './AdMarkersSource';
import Input from './Input';
import InputType from './InputType';

/**
 * @export
 * @class HlsInput
 */
export class HlsInput extends Input {
  /**
   * Discriminator property for Input
   * @type {string}
   * @memberof HlsInput
   */
  public readonly type: InputType = InputType.HLS;

  /**
   * URL of HLS input
   * @type {string}
   * @memberof HlsInput
   */
  public url?: string;

  /**
   * Specifies the source for ad markers messages: - MANIFEST: Ad marker messages are read from tags in the HLS manifest - SEGMENTS: Ad marker messages are read from the content segments from the data stream 
   * @type {AdMarkersSource}
   * @memberof HlsInput
   */
  public adMarkersSource?: AdMarkersSource;

  constructor(obj?: Partial<HlsInput>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
    this.adMarkersSource = map(obj.adMarkersSource);
  }
}

export default HlsInput;

