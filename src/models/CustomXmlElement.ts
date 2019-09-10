import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';

/**
 * @export
 * @class CustomXmlElement
 */
export class CustomXmlElement extends BitmovinResponse {
  /**
   * String representation of the XML element (required)
   * @type {string}
   * @memberof CustomXmlElement
   */
  public data?: string;

  constructor(obj?: Partial<CustomXmlElement>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.data = map(obj.data);
  }
}

export default CustomXmlElement;

