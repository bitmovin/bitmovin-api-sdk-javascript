import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import Message from './Message';
import Status from './Status';

/**
 * @export
 * @class Subtask
 */
export class Subtask extends BitmovinResponse {
  /**
   * Current status (required)
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
   * Name of the subtask (required)
   * @type {string}
   * @memberof Subtask
   */
  public name: string;

  /**
   * Task specific messages
   * @type {Message[]}
   * @memberof Subtask
   */
  public messages?: Message[];

  /**
   * Timestamp when the subtask was created, formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public createdAt?: Date;

  /**
   * Timestamp when the subtask was last updated, formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public updatedAt?: Date;

  /**
   * Timestamp when the subtask was started, formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public startedAt?: Date;

  /**
   * Timestamp when the subtask status changed to 'QUEUED', formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public queuedAt?: Date;

  /**
   * Timestamp when the subtask status changed to to 'RUNNING', formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public runningAt?: Date;

  /**
   * Timestamp when the subtask status changed to 'FINISHED', formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public finishedAt?: Date;

  /**
   * Timestamp when the subtask status changed to 'ERROR', formatted in UTC: YYYY-MM-DDThh:mm:ssZ 
   * @type {Date}
   * @memberof Subtask
   */
  public errorAt?: Date;

  constructor(obj: Partial<Subtask>) {
    super(obj);
    this.status = map(obj.status);
    this.progress = map(obj.progress);
    this.name = map(obj.name);
    this.messages = map<Message>(obj.messages, Message);
    this.createdAt = map(obj.createdAt, Date);
    this.updatedAt = map(obj.updatedAt, Date);
    this.startedAt = map(obj.startedAt, Date);
    this.queuedAt = map(obj.queuedAt, Date);
    this.runningAt = map(obj.runningAt, Date);
    this.finishedAt = map(obj.finishedAt, Date);
    this.errorAt = map(obj.errorAt, Date);
  }
}

export default Subtask;

