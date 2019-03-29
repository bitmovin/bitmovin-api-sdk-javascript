import {map} from '../common/Mapper';
import StreamDetails from './StreamDetails';

/**
 * @export
 * @class AudioStreamDetails
 */
export default class AudioStreamDetails extends StreamDetails {
  constructor(obj: any) {
    super(obj);
    this.sampleRate = map(obj.sampleRate);
    this.bitrate = map(obj.bitrate);
    this.language = map(obj.language);
    this.hearingImpaired = map(obj.hearingImpaired);
  }

  /**
   * @type {number}
   * @memberof AudioStreamDetails
   */
  public sampleRate?: number;
  /**
   * @type {number}
   * @memberof AudioStreamDetails
   */
  public bitrate?: number;
  /**
   * @type {string}
   * @memberof AudioStreamDetails
   */
  public language?: string;
  /**
   * @type {boolean}
   * @memberof AudioStreamDetails
   */
  public hearingImpaired?: boolean;
}
