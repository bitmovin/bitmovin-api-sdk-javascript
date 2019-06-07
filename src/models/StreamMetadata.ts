import {map} from '../common/Mapper';

/**
 * @export
 * @class StreamMetadata
 */
export class StreamMetadata {
  constructor(obj: any) {
    this.language = map(obj.language);
  }

  /**
   * Language of the media contained in the stream. If the value is not set, then no metadata tag is set for the media stream.
   * @type {string}
   * @memberof StreamMetadata
   */
  public language?: string;
}

export default StreamMetadata;

