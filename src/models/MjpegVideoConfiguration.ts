import {map, mapArray} from '../common/Mapper';
import CodecConfigType from './CodecConfigType';
import CodecConfiguration from './CodecConfiguration';
import PixelFormat from './PixelFormat';

/**
 * @export
 * @class MjpegVideoConfiguration
 */
export class MjpegVideoConfiguration extends CodecConfiguration {
  /**
   * Discriminator property for CodecConfiguration
   * @type {string}
   * @memberof MjpegVideoConfiguration
   */
  public readonly type: CodecConfigType = CodecConfigType.MJPEG;

  /**
   * Width of the encoded video
   * @type {number}
   * @memberof MjpegVideoConfiguration
   */
  public width?: number;

  /**
   * Height of the encoded video
   * @type {number}
   * @memberof MjpegVideoConfiguration
   */
  public height?: number;

  /**
   * Target frame rate of the encoded video! (required)
   * @type {number}
   * @memberof MjpegVideoConfiguration
   */
  public rate?: number;

  /**
   * The quality scale parameter (required)
   * @type {number}
   * @memberof MjpegVideoConfiguration
   */
  public qScale?: number;

  /**
   * @type {PixelFormat}
   * @memberof MjpegVideoConfiguration
   */
  public pixelFormat?: PixelFormat;

  constructor(obj?: Partial<MjpegVideoConfiguration>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.width = map(obj.width);
    this.height = map(obj.height);
    this.rate = map(obj.rate);
    this.qScale = map(obj.qScale);
    this.pixelFormat = map(obj.pixelFormat);
  }
}

export default MjpegVideoConfiguration;

