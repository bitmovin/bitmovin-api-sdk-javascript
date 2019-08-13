import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class WebVttConfiguration
 */
export class WebVttConfiguration extends BitmovinResource {
  /**
   * If set to true, the hours section on webvtt timestamp values will explicitely have zeroes instead of being omitted for values where hours = 0.
   * @type {boolean}
   * @memberof WebVttConfiguration
   */
  public appendOptionalZeroHour?: boolean;

  constructor(obj: Partial<WebVttConfiguration>) {
    super(obj);
    this.appendOptionalZeroHour = map(obj.appendOptionalZeroHour);
  }
}

export default WebVttConfiguration;

