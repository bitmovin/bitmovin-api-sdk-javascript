import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import AiSceneAnalysisLiveResult from '../../../../models/AiSceneAnalysisLiveResult';

/**
 * LatestApi - object-oriented interface
 * @export
 * @class LatestApi
 * @extends {BaseAPI}
 */
export default class LatestApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Live Analysis Latest Result
   * @param {string} analysisId ID of the Live Analysis
   * @throws {BitmovinError}
   * @memberof LatestApi
   */
  public get(analysisId: string): Promise<AiSceneAnalysisLiveResult> {
    const pathParamMap = {
      analysis_id: analysisId
    };
    return this.restClient.get<AiSceneAnalysisLiveResult>('/ai-scene-analysis/live-analyses/{analysis_id}/results/latest', pathParamMap).then((response) => {
      return map(response, AiSceneAnalysisLiveResult);
    });
  }
}
