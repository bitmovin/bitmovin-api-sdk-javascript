import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import InputStream from './InputStream';

/**
 * @export
 * @class TtmlEmbed
 */
export default class TtmlEmbed extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.inputStream = map<InputStream>(obj.inputStream, InputStream);
  }

  /**
   * The input stream to extract the subtitle from
   * @type {InputStream}
   * @memberof TtmlEmbed
   */
  public inputStream: InputStream;
}
