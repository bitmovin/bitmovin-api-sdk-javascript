import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import DolbyVisionMetadataSource from './DolbyVisionMetadataSource';
import DolbyVisionProfile from './DolbyVisionProfile';

/**
 * @export
 * @class DolbyVisionMetadata
 */
export class DolbyVisionMetadata extends BitmovinResource {
  /**
   * Dolby Vision Profile (required)
   * @type {DolbyVisionProfile}
   * @memberof DolbyVisionMetadata
   */
  public profile?: DolbyVisionProfile;

  /**
   * Dolby Vision Metadata Source (required)
   * @type {DolbyVisionMetadataSource}
   * @memberof DolbyVisionMetadata
   */
  public metadataSource?: DolbyVisionMetadataSource;

  /**
   * ID of the Dolby Vision Metadata Ingest Input Stream which provides the XML Metadata file. Required if metadataSource is set to INPUT_STREAM.
   * @type {string}
   * @memberof DolbyVisionMetadata
   */
  public metadataInputStreamId?: string;

  constructor(obj?: Partial<DolbyVisionMetadata>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.profile = map(obj.profile);
    this.metadataSource = map(obj.metadataSource);
    this.metadataInputStreamId = map(obj.metadataInputStreamId);
  }
}

export default DolbyVisionMetadata;

