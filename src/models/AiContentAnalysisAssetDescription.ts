import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';

/**
 * @export
 * @class AiContentAnalysisAssetDescription
 */
export class AiContentAnalysisAssetDescription {
  /**
   * Name of the output json file
   * @type {string}
   * @memberof AiContentAnalysisAssetDescription
   */
  public filename?: string;

  /**
   * @type {EncodingOutput[]}
   * @memberof AiContentAnalysisAssetDescription
   */
  public outputs?: EncodingOutput[];

  constructor(obj?: Partial<AiContentAnalysisAssetDescription>) {
    if(!obj) {
      return;
    }
    this.filename = map(obj.filename);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
  }
}

export default AiContentAnalysisAssetDescription;

