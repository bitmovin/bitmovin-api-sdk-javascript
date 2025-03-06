import {map, mapArray} from '../common/Mapper';
import AiContentAnalysisAssetDescription from './AiContentAnalysisAssetDescription';
import AiContentAnalysisAutomaticAdPlacement from './AiContentAnalysisAutomaticAdPlacement';

/**
 * @export
 * @class AiContentAnalysisFeatures
 */
export class AiContentAnalysisFeatures {
  /**
   * AI content analysis will create an asset description file. 
   * @type {AiContentAnalysisAssetDescription}
   * @memberof AiContentAnalysisFeatures
   */
  public assetDescription?: AiContentAnalysisAssetDescription;

  /**
   * Ad markers placed on detected scene changes and configured positions. 
   * @type {AiContentAnalysisAutomaticAdPlacement}
   * @memberof AiContentAnalysisFeatures
   */
  public automaticAdPlacement?: AiContentAnalysisAutomaticAdPlacement;

  constructor(obj?: Partial<AiContentAnalysisFeatures>) {
    if(!obj) {
      return;
    }
    this.assetDescription = map(obj.assetDescription, AiContentAnalysisAssetDescription);
    this.automaticAdPlacement = map(obj.automaticAdPlacement, AiContentAnalysisAutomaticAdPlacement);
  }
}

export default AiContentAnalysisFeatures;

