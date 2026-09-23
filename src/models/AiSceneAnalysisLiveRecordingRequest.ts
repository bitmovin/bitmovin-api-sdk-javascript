import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisLiveOutput from './AiSceneAnalysisLiveOutput';

/**
 * @export
 * @class AiSceneAnalysisLiveRecordingRequest
 */
export class AiSceneAnalysisLiveRecordingRequest {
  /**
   * Destinations for the stream recording (required)
   * @type {AiSceneAnalysisLiveOutput[]}
   * @memberof AiSceneAnalysisLiveRecordingRequest
   */
  public outputs?: AiSceneAnalysisLiveOutput[];

  constructor(obj?: Partial<AiSceneAnalysisLiveRecordingRequest>) {
    if(!obj) {
      return;
    }
    this.outputs = mapArray(obj.outputs, AiSceneAnalysisLiveOutput);
  }
}

export default AiSceneAnalysisLiveRecordingRequest;

