import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import StreamInput from './StreamInput';

/**
 * @export
 * @class StreamDvbSubSubtitle
 */
export class StreamDvbSubSubtitle extends BitmovinResource {
  /**
   * The input stream to extract the subtitle from (required)
   * @type {StreamInput}
   * @memberof StreamDvbSubSubtitle
   */
  public inputStream?: StreamInput;

  constructor(obj: Partial<StreamDvbSubSubtitle>) {
    super(obj);

    this.inputStream = map<StreamInput>(obj.inputStream, StreamInput);
  }
}

export default StreamDvbSubSubtitle;

