import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisAssetDescription from './AiSceneAnalysisAssetDescription';
import AiSceneAnalysisAutomaticAdPlacement from './AiSceneAnalysisAutomaticAdPlacement';

/**
 * @export
 * @class AiSceneAnalysisFeatures
 */
export class AiSceneAnalysisFeatures {
  /**
   * AI scene analysis will create an asset description file. 
   * @type {AiSceneAnalysisAssetDescription}
   * @memberof AiSceneAnalysisFeatures
   */
  public assetDescription?: AiSceneAnalysisAssetDescription;

  /**
   * Ad markers placed on detected scene changes and configured positions. 
   * @type {AiSceneAnalysisAutomaticAdPlacement}
   * @memberof AiSceneAnalysisFeatures
   */
  public automaticAdPlacement?: AiSceneAnalysisAutomaticAdPlacement;

  constructor(obj?: Partial<AiSceneAnalysisFeatures>) {
    if(!obj) {
      return;
    }
    this.assetDescription = map(obj.assetDescription, AiSceneAnalysisAssetDescription);
    this.automaticAdPlacement = map(obj.automaticAdPlacement, AiSceneAnalysisAutomaticAdPlacement);
  }
}

export default AiSceneAnalysisFeatures;

