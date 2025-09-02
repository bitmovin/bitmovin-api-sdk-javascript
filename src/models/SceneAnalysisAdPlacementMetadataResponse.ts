import {map, mapArray} from '../common/Mapper';
import AdPosition from './AdPosition';
import AiSceneAnalysisAutomaticAdPlacement from './AiSceneAnalysisAutomaticAdPlacement';

/**
 * @export
 * @class SceneAnalysisAdPlacementMetadataResponse
 */
export class SceneAnalysisAdPlacementMetadataResponse {
  /**
   * @type {AdPosition[]}
   * @memberof SceneAnalysisAdPlacementMetadataResponse
   */
  public placedAds?: AdPosition[];

  /**
   * @type {AiSceneAnalysisAutomaticAdPlacement}
   * @memberof SceneAnalysisAdPlacementMetadataResponse
   */
  public automaticAdPlacement?: AiSceneAnalysisAutomaticAdPlacement;

  constructor(obj?: Partial<SceneAnalysisAdPlacementMetadataResponse>) {
    if(!obj) {
      return;
    }
    this.placedAds = mapArray(obj.placedAds, AdPosition);
    this.automaticAdPlacement = map(obj.automaticAdPlacement, AiSceneAnalysisAutomaticAdPlacement);
  }
}

export default SceneAnalysisAdPlacementMetadataResponse;

