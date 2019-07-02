import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import StreamInput from './StreamInput';

/**
 * @export
 * @class TtmlEmbed
 */
export class TtmlEmbed extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputStream = map<StreamInput>(obj.inputStream, StreamInput);
  }

  /**
   * The input stream to extract the subtitle from (required)
   * @type {StreamInput}
   * @memberof TtmlEmbed
   */
  public inputStream: StreamInput;
}

export default TtmlEmbed;

