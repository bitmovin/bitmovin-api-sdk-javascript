import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InputStream from './InputStream';

/**
 * @export
 * @class CaptionsEmbedCea
 */
export default class CaptionsEmbedCea extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.channel = map(obj.channel);
    this.inputStream = map<InputStream>(obj.inputStream, InputStream);
  }

  /**
   * Select the channel for the caption information
   * @type {number}
   * @memberof CaptionsEmbedCea
   */
  public channel?: number;
  /**
   * The input stream to extract the subtitle from
   * @type {InputStream}
   * @memberof CaptionsEmbedCea
   */
  public inputStream: InputStream;
}
