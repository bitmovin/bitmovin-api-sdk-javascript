import {map, mapArray} from '../common/Mapper';
import AiSceneAnalysisLiveError from './AiSceneAnalysisLiveError';
import AiSceneAnalysisLiveRecording from './AiSceneAnalysisLiveRecording';
import AiSceneAnalysisLiveStatus from './AiSceneAnalysisLiveStatus';
import EncodingOutput from './EncodingOutput';
import LiveEncoding from './LiveEncoding';

/**
 * @export
 * @class AiSceneAnalysisLiveResponse
 */
export class AiSceneAnalysisLiveResponse {
  /**
   * ID of the Live Analysis resource (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public analysisId?: string;

  /**
   * ID of the Encoding associated with the Analysis (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public encodingId?: string;

  /**
   * Name of the Analysis
   * @type {string}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public name?: string;

  /**
   * Current lifecycle state of the Live Analysis (required)
   * @type {AiSceneAnalysisLiveStatus}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public status?: AiSceneAnalysisLiveStatus;

  /**
   * Resolved output configuration for the stream recording (required)
   * @type {AiSceneAnalysisLiveRecording}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public recording?: AiSceneAnalysisLiveRecording;

  /**
   * Resolved Encoding Output ID references for cumulative AI analysis results (required)
   * @type {EncodingOutput[]}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public outputs?: EncodingOutput[];

  /**
   * Current RTMP ingest details. Present only in the Get Live Analysis details response while the Live Analysis is `RUNNING`.
   * @type {LiveEncoding}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public ingest?: LiveEncoding;

  /**
   * Failure details. Present only when the status is `ERROR` or `TRANSFER_ERROR`.
   * @type {AiSceneAnalysisLiveError}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public error?: AiSceneAnalysisLiveError;

  /**
   * Creation timestamp, returned as UTC in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ (required)
   * @type {Date}
   * @memberof AiSceneAnalysisLiveResponse
   */
  public createdAt?: Date;

  constructor(obj?: Partial<AiSceneAnalysisLiveResponse>) {
    if(!obj) {
      return;
    }
    this.analysisId = map(obj.analysisId);
    this.encodingId = map(obj.encodingId);
    this.name = map(obj.name);
    this.status = map(obj.status);
    this.recording = map(obj.recording, AiSceneAnalysisLiveRecording);
    this.outputs = mapArray(obj.outputs, EncodingOutput);
    this.ingest = map(obj.ingest, LiveEncoding);
    this.error = map(obj.error, AiSceneAnalysisLiveError);
    this.createdAt = map(obj.createdAt, Date);
  }
}

export default AiSceneAnalysisLiveResponse;

