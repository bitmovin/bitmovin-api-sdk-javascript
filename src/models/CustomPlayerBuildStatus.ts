import {map} from '../common/Mapper';
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

  constructor(obj: Partial<CustomPlayerBuildStatus>) {

    this.status = obj.status;
    this.eta = obj.eta;
    this.progress = obj.progress;
    this.messages = map<Message>(obj.messages, Message);
    this.subtasks = obj.subtasks;
  }
}

export default CustomPlayerBuildStatus;

