import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<AiSceneAnalysisAutomaticAdPlacement>) {
    if(!obj) {
      return;
    }
    this.schedule = mapArray(obj.schedule, AutomaticAdPlacementPosition);
  }
}

export default AiSceneAnalysisAutomaticAdPlacement;

