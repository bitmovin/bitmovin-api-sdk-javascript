import {map, mapArray} from '../common/Mapper';

/**
 * Immutable consumer-visible observation produced from an analyzed media window
 * @export
 * @class AiSceneAnalysisLiveObservation
 */
export class AiSceneAnalysisLiveObservation {
  /**
   * Stable opaque observation ID that remains unchanged across cumulative result generations (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveObservation
   */
  public id?: string;

  /**
   * Consumer-visible description of a development in the analyzed media (required)
   * @type {string}
   * @memberof AiSceneAnalysisLiveObservation
   */
  public text?: string;

  /**
   * Start of the analyzed media window that produced the observation (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveObservation
   */
  public startTimeSeconds?: number;

  /**
   * End of the analyzed media window that produced the observation (required)
   * @type {number}
   * @memberof AiSceneAnalysisLiveObservation
   */
  public endTimeSeconds?: number;

  constructor(obj?: Partial<AiSceneAnalysisLiveObservation>) {
    if(!obj) {
      return;
    }
    this.id = map(obj.id);
    this.text = map(obj.text);
    this.startTimeSeconds = map(obj.startTimeSeconds);
    this.endTimeSeconds = map(obj.endTimeSeconds);
  }
}

export default AiSceneAnalysisLiveObservation;

