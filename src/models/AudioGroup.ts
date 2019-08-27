import {map} from '../common/Mapper';

/**
 * @export
 * @class AudioGroup
 */
export class AudioGroup {
  /**
   * Name of the audio group (required)
   * @type {string}
   * @memberof AudioGroup
   */
  public name?: string;

  /**
   * Priority of the audio group (required)
   * @type {number}
   * @memberof AudioGroup
   */
  public priority?: number;

  constructor(obj: Partial<AudioGroup>) {

    this.name = obj.name;
    this.priority = obj.priority;
  }
}

export default AudioGroup;

