import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import SceneAnalysisAdPlacementMetadataResponse from '../../../../models/SceneAnalysisAdPlacementMetadataResponse';

/**
 * AdPlacementsApi - object-oriented interface
 * @export
 * @class AdPlacementsApi
 * @extends {BaseAPI}
 */
export default class AdPlacementsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get AI scene analysis ad placements by encoding ID
   * @param {string} encodingId The encoding ID
   * @throws {BitmovinError}
   * @memberof AdPlacementsApi
   */
  public get(encodingId: string): Promise<SceneAnalysisAdPlacementMetadataResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<SceneAnalysisAdPlacementMetadataResponse>('/ai-scene-analysis/analyses/by-encoding-id/{encoding_id}/ad-placements', pathParamMap).then((response) => {
      return map(response, SceneAnalysisAdPlacementMetadataResponse);
    });
  }
}
