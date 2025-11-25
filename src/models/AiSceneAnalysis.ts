import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisFeatures from './AiSceneAnalysisFeatures';

/**
 * @export
 * @class AiSceneAnalysis
 */
export class AiSceneAnalysis {
  /**
   * Features of the AI scene analysis
   * @type {AiSceneAnalysisFeatures}
   * @memberof AiSceneAnalysis
   */
  public features?: AiSceneAnalysisFeatures;

  constructor(obj?: Partial<AiSceneAnalysis>) {
    if(!obj) {
      return;
    }
    this.features = map(obj.features, AiSceneAnalysisFeatures);
  }
}

export default AiSceneAnalysis;

