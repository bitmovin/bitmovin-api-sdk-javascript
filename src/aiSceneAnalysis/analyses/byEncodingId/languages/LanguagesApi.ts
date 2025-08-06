import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import SceneAnalysisLanguagesResponse from '../../../../models/SceneAnalysisLanguagesResponse';

/**
 * LanguagesApi - object-oriented interface
 * @export
 * @class LanguagesApi
 * @extends {BaseAPI}
 */
export default class LanguagesApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get AI scene analysis languages by encoding ID
   * @param {string} encodingId The encoding ID
   * @throws {BitmovinError}
   * @memberof LanguagesApi
   */
  public get(encodingId: string): Promise<SceneAnalysisLanguagesResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<SceneAnalysisLanguagesResponse>('/ai-scene-analysis/analyses/by-encoding-id/{encoding_id}/languages', pathParamMap).then((response) => {
      return map(response, SceneAnalysisLanguagesResponse);
    });
  }
}
