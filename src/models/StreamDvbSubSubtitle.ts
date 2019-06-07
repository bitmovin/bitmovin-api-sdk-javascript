import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import StreamInput from './StreamInput';

/**
 * @export
 * @class StreamDvbSubSubtitle
 */
export class StreamDvbSubSubtitle extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputStream = map<StreamInput>(obj.inputStream, StreamInput);
  }

  /**
   * The input stream to extract the subtitle from
   * @type {StreamInput}
   * @memberof StreamDvbSubSubtitle
   */
  public inputStream: StreamInput;
}

export default StreamDvbSubSubtitle;

