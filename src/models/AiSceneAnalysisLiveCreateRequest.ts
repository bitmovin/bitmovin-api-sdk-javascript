import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisLiveOutput from './AiSceneAnalysisLiveOutput';
import AiSceneAnalysisLiveRecordingRequest from './AiSceneAnalysisLiveRecordingRequest';
import CloudRegion from './CloudRegion';

/**
 * Configuration for a Live Analysis. Each recording and analysis destination references an existing Encoding Output or provides an inline Output definition. Inline Outputs are created synchronously. Within this request, identical complete inline Output definitions, including credentials, are created once and reused across all destinations; destination paths and ACLs do not affect that reuse.
 * @export
 * @class AiSceneAnalysisLiveCreateRequest
 */
export class AiSceneAnalysisLiveCreateRequest {
  /**
   * Name of the Analysis
   * @type {string}
   * @memberof AiSceneAnalysisLiveCreateRequest
   */
  public name?: string;

  /**
   * Key used to publish the RTMP stream. When the Live Analysis is `RUNNING`, the Get Live Analysis details response returns the current value in `ingest.streamKey`. (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveCreateRequest
   */
  public streamKey?: string;

  /**
   * Region in which the AI analysis runs. `EXTERNAL` is not supported yet.
   * @type {CloudRegion}
   * @memberof AiSceneAnalysisLiveCreateRequest
   */
  public cloudRegion?: CloudRegion;

  /**
   * Destinations for the stream recording (required)
   * @type {AiSceneAnalysisLiveRecordingRequest}
   * @memberof AiSceneAnalysisLiveCreateRequest
   */
  public recording?: AiSceneAnalysisLiveRecordingRequest;

  /**
   * Destinations for cumulative AI analysis results (required)
   * @type {AiSceneAnalysisLiveOutput[]}
   * @memberof AiSceneAnalysisLiveCreateRequest
   */
  public outputs?: AiSceneAnalysisLiveOutput[];

  constructor(obj?: Partial<AiSceneAnalysisLiveCreateRequest>) {
    if(!obj) {
      return;
    }
    this.name = map(obj.name);
    this.streamKey = map(obj.streamKey);
    this.cloudRegion = map(obj.cloudRegion);
    this.recording = map(obj.recording, AiSceneAnalysisLiveRecordingRequest);
    this.outputs = mapArray(obj.outputs, AiSceneAnalysisLiveOutput);
  }
}

export default AiSceneAnalysisLiveCreateRequest;

