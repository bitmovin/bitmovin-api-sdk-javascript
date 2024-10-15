import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class EncodingTemplateStartResponse
 */
export class EncodingTemplateStartResponse {
  /**
   * Id of the Encoding that is created (required)
   * @type {string}
   * @memberof EncodingTemplateStartResponse
   */
  public encodingId?: string;

  constructor(obj?: Partial<EncodingTemplateStartResponse>) {
    if(!obj) {
      return;
    }
    this.encodingId = map(obj.encodingId);
  }
}

export default EncodingTemplateStartResponse;

