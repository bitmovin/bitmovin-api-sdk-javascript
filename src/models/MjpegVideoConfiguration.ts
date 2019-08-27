import {map} from '../common/Mapper';
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
  public type: 'MJPEG' = 'MJPEG';

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

  constructor(obj: Partial<MjpegVideoConfiguration>) {
    super(obj);

    this.width = obj.width;
    this.height = obj.height;
    this.rate = obj.rate;
    this.qScale = obj.qScale;
    this.pixelFormat = obj.pixelFormat;
  }
}

export default MjpegVideoConfiguration;

