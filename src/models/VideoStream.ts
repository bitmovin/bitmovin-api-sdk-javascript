import {map} from '../common/Mapper';
import MediaStream from './MediaStream';

/**
 * @export
 * @class VideoStream
 */
export class VideoStream extends MediaStream {
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
   * Bitrate in bps (the same as bitrate, but represented as an integer value)
   * @type {number}
   * @memberof VideoStream
   */
  public rate?: number;

  /**
   * Width of the video (required)
   * @type {number}
   * @memberof VideoStream
   */
  public width?: number;

  /**
   * Height of the video (required)
   * @type {number}
   * @memberof VideoStream
   */
  public height?: number;

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

  constructor(obj: Partial<VideoStream>) {
    super(obj);

    this.fps = obj.fps;
    this.bitrate = obj.bitrate;
    this.rate = obj.rate;
    this.width = obj.width;
    this.height = obj.height;
    this.par = obj.par;
    this.rotation = obj.rotation;
  }
}

export default VideoStream;

