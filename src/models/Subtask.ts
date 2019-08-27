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
  public status?: Status;

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
  public name?: string;

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

    this.status = obj.status;
    this.progress = obj.progress;
    this.name = obj.name;
    this.messages = map<Message>(obj.messages, Message) || [];
    this.createdAt = map<Date>(obj.createdAt, Date);
    this.updatedAt = map<Date>(obj.updatedAt, Date);
    this.startedAt = map<Date>(obj.startedAt, Date);
    this.queuedAt = map<Date>(obj.queuedAt, Date);
    this.runningAt = map<Date>(obj.runningAt, Date);
    this.finishedAt = map<Date>(obj.finishedAt, Date);
    this.errorAt = map<Date>(obj.errorAt, Date);
  }
}

export default Subtask;

