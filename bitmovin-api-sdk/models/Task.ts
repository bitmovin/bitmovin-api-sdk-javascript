import {map} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import ErrorDetails from './ErrorDetails';
import Message from './Message';
import Status from './Status';
import Subtask from './Subtask';

/**
 * @export
 * @class Task
 */
export default class Task extends BitmovinResponse {
  constructor(obj: any) {
    super(obj);
    this.status = map(obj.status);
    this.eta = map(obj.eta);
    this.progress = map(obj.progress);
    this.subtasks = map<Subtask>(obj.subtasks, Subtask);
    this.messages = map<Message>(obj.messages, Message);
    this.createdAt = map(obj.createdAt);
    this.queuedAt = map(obj.queuedAt);
    this.runningAt = map(obj.runningAt);
    this.finishedAt = map(obj.finishedAt);
    this.errorAt = map(obj.errorAt);
    this.error = map<ErrorDetails>(obj.error, ErrorDetails);
  }

  /**
   * Current status
   * @type {Status}
   * @memberof Task
   */
  public status: Status;
  /**
   * Estimated ETA in seconds
   * @type {number}
   * @memberof Task
   */
  public eta?: number;
  /**
   * Progress in percent
   * @type {number}
   * @memberof Task
   */
  public progress?: number;
  /**
   * List of subtasks
   * @type {Array<Subtask>}
   * @memberof Task
   */
  public subtasks?: Array<Subtask>;
  /**
   * Task specific messages
   * @type {Array<Message>}
   * @memberof Task
   */
  public messages?: Array<Message>;
  /**
   * Timestamp when the task was created, expressed in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public createdAt?: Date;
  /**
   * Timestamp when the task status changed to \"QUEUED\", expressed in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public queuedAt?: Date;
  /**
   * Timestamp when the task status changed to to \"RUNNING\", expressed in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public runningAt?: Date;
  /**
   * Timestamp when the task status changed to \"FINISHED\", expressed in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public finishedAt?: Date;
  /**
   * Timestamp when the task status changed to \"ERROR\", expressed in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public errorAt?: Date;
  /**
   * Additional optional error details
   * @type {ErrorDetails}
   * @memberof Task
   */
  public error?: ErrorDetails;
}
