import {map} from '../common/Mapper';

/**
 * @export
 * @class Accessibility
 */
export default class Accessibility {
  constructor(obj: any) {
    this.value = map(obj.value);
    this.schemeIdUri = map(obj.schemeIdUri);
  }

  /**
   * Can be either list of languages or a complete map of services (or CC channels, in CEA-608 terminology)
   * @type {string}
   * @memberof Accessibility
   */
  public value: string;
  /**
   * The scheme id to use. Please refer to the DASH standard.
   * @type {string}
   * @memberof Accessibility
   */
  public schemeIdUri: string;
}
