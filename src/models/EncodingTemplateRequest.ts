
/**
 * The template request object can be either a string (YAML/JSON) or a generic object that includes all the fields.  Please note that when sending the request as an object, the order of the fields is important, as it determines the sequence in which the Encoding resources are created. 
 * @export
 * @class EncodingTemplateRequest
 */
export class EncodingTemplateRequest {
  constructor(obj?: Partial<EncodingTemplateRequest>) {
    if(!obj) {
      return;
    }
  }
}

export default EncodingTemplateRequest;

