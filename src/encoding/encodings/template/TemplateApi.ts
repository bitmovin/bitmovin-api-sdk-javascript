import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import EncodingTemplateUrlResponse from '../../../models/EncodingTemplateUrlResponse';

/**
 * TemplateApi - object-oriented interface
 * @export
 * @class TemplateApi
 * @extends {BaseAPI}
 */
export default class TemplateApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Encoding Template URL
   * @param {string} encodingId Id of the Encoding
   * @throws {BitmovinError}
   * @memberof TemplateApi
   */
  public get(encodingId: string): Promise<EncodingTemplateUrlResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<EncodingTemplateUrlResponse>('/encoding/encodings/{encoding_id}/template', pathParamMap).then((response) => {
      return map(response, EncodingTemplateUrlResponse);
    });
  }
}
