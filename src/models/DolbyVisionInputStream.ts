import {map, mapArray} from '../common/Mapper';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class DolbyVisionInputStream
 */
export class DolbyVisionInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof DolbyVisionInputStream
   */
  public readonly type: InputStreamType = InputStreamType.DOLBY_VISION;

  /**
   * Id of input (required)
   * @type {string}
   * @memberof DolbyVisionInputStream
   */
  public inputId?: string;

  /**
   * Path to Dolby Vision input video file. (required)
   * @type {string}
   * @memberof DolbyVisionInputStream
   */
  public videoInputPath?: string;

  /**
   * Path to Dolby Vision Metadata file. This field is required when the metadata is not embedded in the video input file.
   * @type {string}
   * @memberof DolbyVisionInputStream
   */
  public metadataInputPath?: string;

  constructor(obj?: Partial<DolbyVisionInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.videoInputPath = map(obj.videoInputPath);
    this.metadataInputPath = map(obj.metadataInputPath);
  }
}

export default DolbyVisionInputStream;

