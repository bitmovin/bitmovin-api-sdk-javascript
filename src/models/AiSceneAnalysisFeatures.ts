import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisAssetDescription from './AiSceneAnalysisAssetDescription';
import AiSceneAnalysisAutomaticAdPlacement from './AiSceneAnalysisAutomaticAdPlacement';
import AiSceneAnalysisOutputLanguageCodes from './AiSceneAnalysisOutputLanguageCodes';
import AiSceneAnalysisRegulatoryAdvisories from './AiSceneAnalysisRegulatoryAdvisories';

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

  /**
   * AI scene analysis will create translated asset description files for the language codes. 
   * @type {AiSceneAnalysisOutputLanguageCodes}
   * @memberof AiSceneAnalysisFeatures
   */
  public outputLanguageCodes?: AiSceneAnalysisOutputLanguageCodes;

  /**
   * AI scene analysis will screen the asset for content requiring a statutory on-screen advisory and report the findings per shot in the asset description. Requires assetDescription. Contact support to enable this feature for your organization. 
   * @type {AiSceneAnalysisRegulatoryAdvisories}
   * @memberof AiSceneAnalysisFeatures
   */
  public regulatoryAdvisories?: AiSceneAnalysisRegulatoryAdvisories;

  constructor(obj?: Partial<AiSceneAnalysisFeatures>) {
    if(!obj) {
      return;
    }
    this.assetDescription = map(obj.assetDescription, AiSceneAnalysisAssetDescription);
    this.automaticAdPlacement = map(obj.automaticAdPlacement, AiSceneAnalysisAutomaticAdPlacement);
    this.outputLanguageCodes = map(obj.outputLanguageCodes, AiSceneAnalysisOutputLanguageCodes);
    this.regulatoryAdvisories = map(obj.regulatoryAdvisories, AiSceneAnalysisRegulatoryAdvisories);
  }
}

export default AiSceneAnalysisFeatures;

