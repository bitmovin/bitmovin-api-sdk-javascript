import {map} from '../common/Mapper';
import StreamDetails from './StreamDetails';

/**
 * @export
 * @class VideoStreamDetails
 */
export default class VideoStreamDetails extends StreamDetails {
  constructor(obj: any) {
    super(obj);
    this.fps = map(obj.fps);
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.bitrate = map(obj.bitrate);
  }

  /**
   * @type {string}
   * @memberof VideoStreamDetails
   */
  public fps?: string;
  /**
   * @type {number}
   * @memberof VideoStreamDetails
   */
  public width?: number;
  /**
   * @type {number}
   * @memberof VideoStreamDetails
   */
  public height?: number;
  /**
   * @type {number}
   * @memberof VideoStreamDetails
   */
  public bitrate?: number;
}
