import {map, mapArray} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import SubtitleConfiguration from './SubtitleConfiguration';
import WebVttCueIdentifierPolicy from './WebVttCueIdentifierPolicy';

/**
 * @export
 * @class WebVttConfiguration
 */
export class WebVttConfiguration extends SubtitleConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof WebVttConfiguration
   */
  public type: CodecConfigType.WEBVTT = CodecConfigType.WEBVTT;

  /**
   * If set to true, the hours section on webvtt timestamp values will explicitely have zeroes instead of being omitted for values where hours = 0.
   * @type {boolean}
   * @memberof WebVttConfiguration
   */
  public appendOptionalZeroHour?: boolean;

  /**
   * If set to true, the region information of the resulting webvtt file will be omitted. Defaults to false.
   * @type {boolean}
   * @memberof WebVttConfiguration
   */
  public ignoreRegion?: boolean;

  /**
   * @type {WebVttCueIdentifierPolicy}
   * @memberof WebVttConfiguration
   */
  public cueIdentifierPolicy?: WebVttCueIdentifierPolicy;

  constructor(obj?: Partial<WebVttConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.appendOptionalZeroHour = map(obj.appendOptionalZeroHour);
    this.ignoreRegion = map(obj.ignoreRegion);
    this.cueIdentifierPolicy = map(obj.cueIdentifierPolicy);
  }
}

export default WebVttConfiguration;

