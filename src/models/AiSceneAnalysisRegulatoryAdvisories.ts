import {map, mapArray} from '../common/Mapper';
import RegulatoryAdvisoryTopic from './RegulatoryAdvisoryTopic';

/**
 * @export
 * @class AiSceneAnalysisRegulatoryAdvisories
 */
export class AiSceneAnalysisRegulatoryAdvisories {
  /**
   * The regulatory advisory topics to screen the asset for. At least one topic must be set. (required)
   * @type {RegulatoryAdvisoryTopic[]}
   * @memberof AiSceneAnalysisRegulatoryAdvisories
   */
  public topics?: RegulatoryAdvisoryTopic[];

  constructor(obj?: Partial<AiSceneAnalysisRegulatoryAdvisories>) {
    if(!obj) {
      return;
    }
    this.topics = mapArray(obj.topics);
  }
}

export default AiSceneAnalysisRegulatoryAdvisories;

