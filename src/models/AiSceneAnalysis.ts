import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisFeatures from './AiSceneAnalysisFeatures';
import AiService from './AiService';

/**
 * @export
 * @class AiSceneAnalysis
 */
export class AiSceneAnalysis {
  /**
   * AI service settings
   * @type {AiService}
   * @memberof AiSceneAnalysis
   */
  public aiService?: AiService;

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
    this.aiService = map(obj.aiService, AiService);
    this.features = map(obj.features, AiSceneAnalysisFeatures);
  }
}

export default AiSceneAnalysis;

