import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import Message from './Message';
import Status from './Status';

/**
 * @export
 * @class Subtask
 */
export default class Subtask extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.status = map(obj.status);
    this.progress = map(obj.progress);
    this.name = map(obj.name);
    this.messages = map<Message>(obj.messages, Message);
    this.createdAt = map(obj.createdAt);
    this.updatedAt = map(obj.updatedAt);
    this.startedAt = map(obj.startedAt);
    this.queuedAt = map(obj.queuedAt);
    this.runningAt = map(obj.runningAt);
    this.finishedAt = map(obj.finishedAt);
    this.errorAt = map(obj.errorAt);
  }

  /**
   * Current status
   * @type {Status}
   * @memberof Subtask
   */
  public status: Status;
  /**
   * Progress in percent
   * @type {number}
   * @memberof Subtask
   */
  public progress?: number;
  /**
   * Name of the subtask
   * @type {string}
   * @memberof Subtask
   */
  public name: string;
  /**
   * Task specific messages
   * @type {Array<Message>}
   * @memberof Subtask
   */
  public messages?: Array<Message>;
  /**
   * Timestamp when the subtask was created, expressed in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public createdAt?: Date;
  /**
   * Timestamp when the subtask was last updated, expressed in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public updatedAt?: Date;
  /**
   * Timestamp when the subtask was started, expressed in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public startedAt?: Date;
  /**
   * Timestamp when the subtask status changed to 'QUEUED', expressed in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public queuedAt?: Date;
  /**
   * Timestamp when the subtask status changed to to 'RUNNING', expressed in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public runningAt?: Date;
  /**
   * Timestamp when the subtask status changed to 'FINISHED', expressed in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public finishedAt?: Date;
  /**
   * Timestamp when the subtask status changed to 'ERROR', expressed in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public errorAt?: Date;
}
