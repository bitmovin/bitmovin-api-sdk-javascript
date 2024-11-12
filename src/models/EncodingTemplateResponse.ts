import {map, mapArray} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import EncodingTemplateType from './EncodingTemplateType';

/**
 * @export
 * @class EncodingTemplateResponse
 */
export class EncodingTemplateResponse extends BitmovinResource {
  /**
   * @type {EncodingTemplateType}
   * @memberof EncodingTemplateResponse
   */
  public type?: EncodingTemplateType;

  constructor(obj?: Partial<EncodingTemplateResponse>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.type = map(obj.type);
  }
}

export default EncodingTemplateResponse;

