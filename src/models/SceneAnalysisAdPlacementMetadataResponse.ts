import {map, mapArray} from '../common/Mapper';
import AdPosition from './AdPosition';
import AiSceneAnalysisAutomaticAdPlacement from './AiSceneAnalysisAutomaticAdPlacement';

/**
 * Ad placement results for an encoding.
 * @export
 * @class SceneAnalysisAdPlacementMetadataResponse
 */
export class SceneAnalysisAdPlacementMetadataResponse {
  /**
   * Ad breaks selected for this encoding. Empty or omitted when none were selected.
   * @type {AdPosition[]}
   * @memberof SceneAnalysisAdPlacementMetadataResponse
   */
  public placedAds?: AdPosition[];

  /**
   * Placement settings for this encoding. The schedule includes only entries that produced an ad break, with their requested positions.
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

