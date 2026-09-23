/**
 * @export
 * @enum {string}
 */
export enum AiSceneAnalysisLiveStatus {
  CREATED = 'CREATED',
  QUEUED = 'QUEUED',
  RUNNING = 'RUNNING',
  FINISHED = 'FINISHED',
  CANCELED = 'CANCELED',
  ERROR = 'ERROR',
  TRANSFER_ERROR = 'TRANSFER_ERROR'
}

export default AiSceneAnalysisLiveStatus;

