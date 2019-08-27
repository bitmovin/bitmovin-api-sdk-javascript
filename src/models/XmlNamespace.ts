import {map} from '../common/Mapper';

/**
 * @export
 * @class XmlNamespace
 */
export class XmlNamespace {
  /**
   * Name of the XML Namespace reference (required)
   * @type {string}
   * @memberof XmlNamespace
   */
  public prefix?: string;

  /**
   * Source of the XML Namespace reference (required)
   * @type {string}
   * @memberof XmlNamespace
   */
  public uri?: string;

  constructor(obj: Partial<XmlNamespace>) {

    this.prefix = obj.prefix;
    this.uri = obj.uri;
  }
}

export default XmlNamespace;

