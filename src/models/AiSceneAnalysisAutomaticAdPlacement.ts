import {map, mapArray} from '../common/Mapper';
import AllSceneBoundaries from './AllSceneBoundaries';
import AutomaticAdPlacementPosition from './AutomaticAdPlacementPosition';

/**
 * @export
 * @class AiSceneAnalysisAutomaticAdPlacement
 */
export class AiSceneAnalysisAutomaticAdPlacement {
  /**
   * Ad placements schedule 
   * @type {AutomaticAdPlacementPosition[]}
   * @memberof AiSceneAnalysisAutomaticAdPlacement
   */
  public schedule?: AutomaticAdPlacementPosition[];

  /**
   * Configuration for placing keyframes and optional cue tags at every detected scene boundary. 
   * @type {AllSceneBoundaries}
   * @memberof AiSceneAnalysisAutomaticAdPlacement
   */
  public allSceneBoundaries?: AllSceneBoundaries;

  constructor(obj?: Partial<AiSceneAnalysisAutomaticAdPlacement>) {
    if(!obj) {
      return;
    }
    this.schedule = mapArray(obj.schedule, AutomaticAdPlacementPosition);
    this.allSceneBoundaries = map(obj.allSceneBoundaries, AllSceneBoundaries);
  }
}

export default AiSceneAnalysisAutomaticAdPlacement;

