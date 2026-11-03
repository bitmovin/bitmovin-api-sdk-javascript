import {map, mapArray} from '../common/Mapper';

/**
 * Available language variants of an analysis result.
 * @export
 * @class SceneAnalysisLanguagesResponse
 */
export class SceneAnalysisLanguagesResponse {
  /**
   * Language codes registered for available analysis details. The base English result can be included even when no translations were requested; this is not the list of detected input languages.
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

