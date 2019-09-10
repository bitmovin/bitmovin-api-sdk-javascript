import {map, mapArray} from '../common/Mapper';
import CodecConfiguration from './CodecConfiguration';

/**
 * @export
 * @class AudioConfiguration
 */
export class AudioConfiguration extends CodecConfiguration {
  /**
   * Target bitrate for the encoded audio in bps (required)
   * @type {number}
   * @memberof AudioConfiguration
   */
  public bitrate?: number;

  /**
   * Audio sampling rate Hz
   * @type {number}
   * @memberof AudioConfiguration
   */
  public rate?: number;

  constructor(obj?: Partial<AudioConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.bitrate = map(obj.bitrate);
    this.rate = map(obj.rate);
  }
}

export default AudioConfiguration;

