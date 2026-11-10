import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class AiSceneAnalysisAssetDescription
 */
export class AiSceneAnalysisAssetDescription {
  /**
   * Name of the output JSON file. The [asset-description JSON Schema](https://storage.googleapis.com/ai-scene-analysis-demo-content/schemas/asset-description.schema.json) describes the structure of newly written original and translated files.
   * @type {string}
   * @memberof AiSceneAnalysisAssetDescription
   */
  public filename?: string;

  /**
   * Output destinations in which the generated asset-description JSON files are stored.
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

