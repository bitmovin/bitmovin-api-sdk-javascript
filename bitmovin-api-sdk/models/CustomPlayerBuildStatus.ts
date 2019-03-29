import {map} from '../common/Mapper';
import Message from './Message';
import Status from './Status';

/**
 * @export
 * @class CustomPlayerBuildStatus
 */
export default class CustomPlayerBuildStatus {
  constructor(obj: any) {
    this.status = map(obj.status);
    this.eta = map(obj.eta);
    this.progress = map(obj.progress);
    this.messages = map<Message>(obj.messages, Message);
    this.subtasks = map(obj.subtasks);
  }

  /**
   * Status of the player build
   * @type {Status}
   * @memberof CustomPlayerBuildStatus
   */
  public status: Status;
  /**
   * The estimated time span of the custom player build in seconds.
   * @type {number}
   * @memberof CustomPlayerBuildStatus
   */
  public eta?: number;
  /**
   * The actual progress of the custom player build.
   * @type {number}
   * @memberof CustomPlayerBuildStatus
   */
  public progress: number;
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
}
