import {map, mapArray} from '../common/Mapper';
import ScenePacing from './ScenePacing';
import SceneTension from './SceneTension';

/**
 * @export
 * @class SceneDynamics
 */
export class SceneDynamics {
  /**
   * The detected tension of the scene based on content analysis
   * @type {SceneTension}
   * @memberof SceneDynamics
   */
  public tension?: SceneTension;

  /**
   * The detected pacing of the scene based on content analysis
   * @type {ScenePacing}
   * @memberof SceneDynamics
   */
  public pacing?: ScenePacing;

  constructor(obj?: Partial<SceneDynamics>) {
    if(!obj) {
      return;
    }
    this.tension = map(obj.tension);
    this.pacing = map(obj.pacing);
  }
}

export default SceneDynamics;

