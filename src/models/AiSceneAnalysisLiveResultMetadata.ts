import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AiSceneAnalysisLiveResultMetadata
 */
export class AiSceneAnalysisLiveResultMetadata {
  /**
   * Version of the AI analysis software (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveResultMetadata
   */
  public version?: string;

  /**
   * Disclaimer associated with AI-generated analysis data (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveResultMetadata
   */
  public disclaimer?: string;

  constructor(obj?: Partial<AiSceneAnalysisLiveResultMetadata>) {
    if(!obj) {
      return;
    }
    this.version = map(obj.version);
    this.disclaimer = map(obj.disclaimer);
  }
}

export default AiSceneAnalysisLiveResultMetadata;

