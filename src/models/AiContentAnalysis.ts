import {map, mapArray} from '../common/Mapper';
import AiContentAnalysisFeatures from './AiContentAnalysisFeatures';
import AiService from './AiService';

/**
 * @export
 * @class AiContentAnalysis
 */
export class AiContentAnalysis {
  /**
   * AI service settings
   * @type {AiService}
   * @memberof AiContentAnalysis
   */
  public aiService?: AiService;

  /**
   * Features of the AI content analysis
   * @type {AiContentAnalysisFeatures}
   * @memberof AiContentAnalysis
   */
  public features?: AiContentAnalysisFeatures;

  constructor(obj?: Partial<AiContentAnalysis>) {
    if(!obj) {
      return;
    }
    this.aiService = map(obj.aiService, AiService);
    this.features = map(obj.features, AiContentAnalysisFeatures);
  }
}

export default AiContentAnalysis;

