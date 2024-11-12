import {map, mapArray} from '../common/Mapper';
import EncodingTemplateResponse from './EncodingTemplateResponse';
import EncodingTemplateType from './EncodingTemplateType';

/**
 * @export
 * @class EncodingTemplateDetails
 */
export class EncodingTemplateDetails extends EncodingTemplateResponse {
  /**
   * The url to download the template file (required)
   * @type {string}
   * @memberof EncodingTemplateDetails
   */
  public url?: string;

  constructor(obj?: Partial<EncodingTemplateDetails>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.url = map(obj.url);
  }
}

export default EncodingTemplateDetails;

