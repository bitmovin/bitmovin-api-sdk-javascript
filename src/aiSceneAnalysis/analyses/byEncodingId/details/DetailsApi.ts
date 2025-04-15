import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import SceneAnalysisDetailsResponse from '../../../../models/SceneAnalysisDetailsResponse';

/**
 * DetailsApi - object-oriented interface
 * @export
 * @class DetailsApi
 * @extends {BaseAPI}
 */
export default class DetailsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get AI scene analysis details by encoding ID
   * @param {string} encodingId The encoding ID
   * @throws {BitmovinError}
   * @memberof DetailsApi
   */
  public get(encodingId: string): Promise<SceneAnalysisDetailsResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<SceneAnalysisDetailsResponse>('/ai-scene-analysis/analyses/by-encoding-id/{encoding_id}/details', pathParamMap).then((response) => {
      return map(response, SceneAnalysisDetailsResponse);
    });
  }
}
