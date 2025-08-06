import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class SceneAnalysisLanguagesResponse
 */
export class SceneAnalysisLanguagesResponse {
  /**
   * @type {string[]}
   * @memberof SceneAnalysisLanguagesResponse
   */
  public outputLanguageCodes?: string[];

  constructor(obj?: Partial<SceneAnalysisLanguagesResponse>) {
    if(!obj) {
      return;
    }
    this.outputLanguageCodes = mapArray(obj.outputLanguageCodes);
  }
}

export default SceneAnalysisLanguagesResponse;

