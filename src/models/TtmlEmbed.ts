import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import StreamInput from './StreamInput';

/**
 * @export
 * @class TtmlEmbed
 */
export class TtmlEmbed extends BitmovinResource {
  /**
   * The input stream to extract the subtitle from (required)
   * @type {StreamInput}
   * @memberof TtmlEmbed
   */
  public inputStream?: StreamInput;

  constructor(obj?: Partial<TtmlEmbed>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.inputStream = map(obj.inputStream, StreamInput);
  }
}

export default TtmlEmbed;

