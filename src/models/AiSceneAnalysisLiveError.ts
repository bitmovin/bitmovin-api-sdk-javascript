import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AiSceneAnalysisLiveError
 */
export class AiSceneAnalysisLiveError {
  /**
   * Stable machine-readable failure code (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveError
   */
  public code?: string;

  /**
   * Credential-free failure description safe to expose to the customer (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveError
   */
  public message?: string;

  /**
   * Time at which the failure was recorded (required)
   * @type {Date}
   * @memberof AiSceneAnalysisLiveError
   */
  public timestamp?: Date;

  constructor(obj?: Partial<AiSceneAnalysisLiveError>) {
    if(!obj) {
      return;
    }
    this.code = map(obj.code);
    this.message = map(obj.message);
    this.timestamp = map(obj.timestamp, Date);
  }
}

export default AiSceneAnalysisLiveError;

