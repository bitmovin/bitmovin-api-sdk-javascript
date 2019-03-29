import {map} from '../common/Mapper';
import MediaStream from './MediaStream';

/**
 * @export
 * @class VideoStream
 */
export default class VideoStream extends MediaStream {
  constructor(obj: any) {
    super(obj);
    this.fps = map(obj.fps);
    this.bitrate = map(obj.bitrate);
    this.rate = map(obj.rate);
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.par = map(obj.par);
    this.rotation = map(obj.rotation);
  }

  /**
   * Frame rate of the video
   * @type {string}
   * @memberof VideoStream
   */
  public fps?: string;
  /**
   * Bitrate in bps
   * @type {string}
   * @memberof VideoStream
   */
  public bitrate?: string;
  /**
   * Bitrate in bps
   * @type {number}
   * @memberof VideoStream
   */
  public rate?: number;
  /**
   * Width of the video
   * @type {number}
   * @memberof VideoStream
   */
  public width: number;
  /**
   * Height of the video
   * @type {number}
   * @memberof VideoStream
   */
  public height: number;
  /**
   * Pixel aspect ratio of the video. Default is 1.0
   * @type {number}
   * @memberof VideoStream
   */
  public par?: number;
  /**
   * Rotation of the video for mobile devices. Default is 0.
   * @type {number}
   * @memberof VideoStream
   */
  public rotation?: number;
}
