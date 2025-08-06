import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import SceneAnalysisDetailsResponse from '../../../../../models/SceneAnalysisDetailsResponse';

/**
 * LanguageApi - object-oriented interface
 * @export
 * @class LanguageApi
 * @extends {BaseAPI}
 */
export default class LanguageApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get translated AI scene analysis details by encoding ID and language code
   * @param {string} encodingId The encoding ID
   * @param {string} languageCode The language code
   * @throws {BitmovinError}
   * @memberof LanguageApi
   */
  public get(encodingId: string, languageCode: string): Promise<SceneAnalysisDetailsResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      language_code: languageCode
    };
    return this.restClient.get<SceneAnalysisDetailsResponse>('/ai-scene-analysis/analyses/by-encoding-id/{encoding_id}/details/language/{language_code}', pathParamMap).then((response) => {
      return map(response, SceneAnalysisDetailsResponse);
    });
  }
}
