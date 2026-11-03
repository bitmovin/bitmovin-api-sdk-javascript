import {map, mapArray} from '../common/Mapper';
import Character from './Character';
import SceneDynamics from './SceneDynamics';
import SceneObject from './SceneObject';
import Setting from './Setting';

/**
 * @export
 * @class Content
 */
export class Content {
  /**
   * Selected people or characters described in this scene. An empty or omitted list can mean that no characters were identified or that character descriptions were unavailable. (required)
   * @type {Character[]}
   * @memberof Content
   */
  public characters?: Character[];

  /**
   * Selected notable objects described in this scene; not an exhaustive object inventory. (required)
   * @type {SceneObject[]}
   * @memberof Content
   */
  public objects?: SceneObject[];

  /**
   * Places and environmental conditions described in this scene. More than one setting can be reported. (required)
   * @type {Setting[]}
   * @memberof Content
   */
  public settings?: Setting[];

  /**
   * Narrative dynamics of this scene.
   * @type {SceneDynamics}
   * @memberof Content
   */
  public dynamics?: SceneDynamics;

  constructor(obj?: Partial<Content>) {
    if(!obj) {
      return;
    }
    this.characters = mapArray(obj.characters, Character);
    this.objects = mapArray(obj.objects, SceneObject);
    this.settings = mapArray(obj.settings, Setting);
    this.dynamics = map(obj.dynamics, SceneDynamics);
  }
}

export default Content;

