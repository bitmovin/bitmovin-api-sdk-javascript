import {map, mapArray} from '../common/Mapper';
import Message from './Message';
import Status from './Status';

/**
 * @export
 * @class CustomPlayerBuildStatus
 */
export class CustomPlayerBuildStatus {
  /**
   * Status of the player build (required)
   * @type {Status}
   * @memberof CustomPlayerBuildStatus
   */
  public status?: Status;

  /**
   * The estimated time span of the custom player build in seconds.
   * @type {number}
   * @memberof CustomPlayerBuildStatus
   */
  public eta?: number;

  /**
   * The actual progress of the custom player build. (required)
   * @type {number}
   * @memberof CustomPlayerBuildStatus
   */
  public progress?: number;

  /**
   * @type {Message}
   * @memberof CustomPlayerBuildStatus
   */
  public messages?: Message;

  /**
   * @type {string}
   * @memberof CustomPlayerBuildStatus
   */
  public subtasks?: string;

  constructor(obj?: Partial<CustomPlayerBuildStatus>) {
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.eta = map(obj.eta);
    this.progress = map(obj.progress);
    this.messages = map(obj.messages, Message);
    this.subtasks = map(obj.subtasks);
  }
}

export default CustomPlayerBuildStatus;

