import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class EncodingTemplateUrlResponse
 */
export class EncodingTemplateUrlResponse {
  /**
   * The download URL of the encoding template. (required)
   * @type {string}
   * @memberof EncodingTemplateUrlResponse
   */
  public url?: string;

  constructor(obj?: Partial<EncodingTemplateUrlResponse>) {
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
  }
}

export default EncodingTemplateUrlResponse;

