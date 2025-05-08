import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class AiSceneAnalysisAssetDescription
 */
export class AiSceneAnalysisAssetDescription {
  /**
   * Name of the output json file
   * @type {string}
   * @memberof AiSceneAnalysisAssetDescription
   */
  public filename?: string;

  /**
   * @type {EncodingOutput[]}
   * @memberof AiSceneAnalysisAssetDescription
   */
  public outputs?: EncodingOutput[];

  constructor(obj?: Partial<AiSceneAnalysisAssetDescription>) {
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
  }
}

export default AiSceneAnalysisAssetDescription;

