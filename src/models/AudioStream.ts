import {map, mapArray} from '../common/Mapper';
import MediaStream from './MediaStream';

/**
 * @export
 * @class AudioStream
 */
export class AudioStream extends MediaStream {
  /**
   * Audio sampling rate in Hz
   * @type {number}
   * @memberof AudioStream
   */
  public sampleRate?: number;

  /**
   * Bitrate in bps
   * @type {string}
   * @memberof AudioStream
   */
  public bitrate?: string;

  /**
   * Bitrate in bps
   * @type {number}
   * @memberof AudioStream
   */
  public rate?: number;

  /**
   * Audio channel format
   * @type {string}
   * @memberof AudioStream
   */
  public channelFormat?: string;

  /**
   * Language of the stream
   * @type {string}
   * @memberof AudioStream
   */
  public language?: string;

  /**
   * Hearing impaired support
   * @type {boolean}
   * @memberof AudioStream
   */
  public hearingImpaired?: boolean;

  constructor(obj?: Partial<AudioStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.sampleRate = map(obj.sampleRate);
    this.bitrate = map(obj.bitrate);
    this.rate = map(obj.rate);
    this.channelFormat = map(obj.channelFormat);
    this.language = map(obj.language);
    this.hearingImpaired = map(obj.hearingImpaired);
  }
}

export default AudioStream;

