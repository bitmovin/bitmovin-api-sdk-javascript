import {map, mapArray} from '../common/Mapper';
import AutomaticAdPlacementPosition from './AutomaticAdPlacementPosition';

/**
 * @export
 * @class AiContentAnalysisAutomaticAdPlacement
 */
export class AiContentAnalysisAutomaticAdPlacement {
  /**
   * Ad placements schedule 
   * @type {AutomaticAdPlacementPosition[]}
   * @memberof AiContentAnalysisAutomaticAdPlacement
   */
  public schedule?: AutomaticAdPlacementPosition[];

  constructor(obj?: Partial<AiContentAnalysisAutomaticAdPlacement>) {
    if(!obj) {
      return;
    }
    this.schedule = mapArray(obj.schedule, AutomaticAdPlacementPosition);
  }
}

export default AiContentAnalysisAutomaticAdPlacement;

