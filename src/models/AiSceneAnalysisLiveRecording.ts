import {map, mapArray} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';

/**
 * Resolved output configuration for the stream recording
 * @export
 * @class AiSceneAnalysisLiveRecording
 */
export class AiSceneAnalysisLiveRecording {
  /**
   * Resolved Encoding Output ID references for the stream recording (required)
   * @type {EncodingOutput[]}
   * @memberof AiSceneAnalysisLiveRecording
   */
  public outputs?: EncodingOutput[];

  constructor(obj?: Partial<AiSceneAnalysisLiveRecording>) {
    if(!obj) {
      return;
    }
    this.outputs = mapArray(obj.outputs, EncodingOutput);
  }
}

export default AiSceneAnalysisLiveRecording;

