import {map} from '../common/Mapper';
import CloudRegion from './CloudRegion';

/**
 * @export
 * @class AnalysisStartRequest
 */
export default class AnalysisStartRequest {
  constructor(obj: any) {
    this.path = map(obj.path);
    this.cloudRegion = map(obj.cloudRegion);
  }

  /**
   * @type {string}
   * @memberof AnalysisStartRequest
   */
  public path?: string;
  /**
   * @type {CloudRegion}
   * @memberof AnalysisStartRequest
   */
  public cloudRegion?: CloudRegion;
}
