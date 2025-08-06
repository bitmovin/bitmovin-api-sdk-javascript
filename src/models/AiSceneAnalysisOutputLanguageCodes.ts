import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AiSceneAnalysisOutputLanguageCodes
 */
export class AiSceneAnalysisOutputLanguageCodes {
  /**
   * @type {string[]}
   * @memberof AiSceneAnalysisOutputLanguageCodes
   */
  public outputLanguageCodes?: string[];

  constructor(obj?: Partial<AiSceneAnalysisOutputLanguageCodes>) {
    if(!obj) {
      return;
    }
    this.outputLanguageCodes = mapArray(obj.outputLanguageCodes);
  }
}

export default AiSceneAnalysisOutputLanguageCodes;

