import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import EncodingTemplateRequest from '../../models/EncodingTemplateRequest';
import EncodingTemplateStartResponse from '../../models/EncodingTemplateStartResponse';

/**
 * TemplatesApi - object-oriented interface
 * @export
 * @class TemplatesApi
 * @extends {BaseAPI}
 */
export default class TemplatesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary BETA: Start an Encoding defined with an Encoding Template
   * @param {any} encodingTemplateRequest The Encoding Template to start an Encoding from
   * @throws {BitmovinError}
   * @memberof TemplatesApi
   */
  public start(encodingTemplateRequest?: any): Promise<EncodingTemplateStartResponse> {
    return this.restClient.post<EncodingTemplateStartResponse>('/encoding/templates/start', {}, encodingTemplateRequest).then((response) => {
      return map(response, EncodingTemplateStartResponse);
    });
  }
}
