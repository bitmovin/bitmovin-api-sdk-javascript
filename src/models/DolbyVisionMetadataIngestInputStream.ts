import {map, mapArray} from '../common/Mapper';
import InputStream from './InputStream';
import InputStreamType from './InputStreamType';

/**
 * @export
 * @class DolbyVisionMetadataIngestInputStream
 */
export class DolbyVisionMetadataIngestInputStream extends InputStream {
  /**
   * Discriminator property for InputStream
   * @type {string}
   * @memberof DolbyVisionMetadataIngestInputStream
   */
  public type: InputStreamType.SIDECAR_DOLBY_VISION_METADATA = InputStreamType.SIDECAR_DOLBY_VISION_METADATA;

  /**
   * Id of input (required)
   * @type {string}
   * @memberof DolbyVisionMetadataIngestInputStream
   */
  public inputId?: string;

  /**
   * Path to Dolby Vision Metadata file (required)
   * @type {string}
   * @memberof DolbyVisionMetadataIngestInputStream
   */
  public inputPath?: string;

  constructor(obj?: Partial<DolbyVisionMetadataIngestInputStream>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputId = map(obj.inputId);
    this.inputPath = map(obj.inputPath);
  }
}

export default DolbyVisionMetadataIngestInputStream;

