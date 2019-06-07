import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class CustomXmlElement
 */
export class CustomXmlElement extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.data = map(obj.data);
  }

  /**
   * String representation of the XML element
   * @type {string}
   * @memberof CustomXmlElement
   */
  public data: string;
}

export default CustomXmlElement;

