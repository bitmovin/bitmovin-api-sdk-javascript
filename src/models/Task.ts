import {map, mapArray} from '../common/Mapper';
import BitmovinResponse from './BitmovinResponse';
import ErrorDetails from './ErrorDetails';
import Message from './Message';
import Status from './Status';
import Subtask from './Subtask';

/**
 * @export
 * @class Task
 */
export class Task extends BitmovinResponse {
  /**
   * Current status (required)
   * @type {Status}
   * @memberof Task
   */
  public status?: Status;

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
   * @type {Subtask[]}
   * @memberof Task
   */
  public subtasks?: Subtask[];

  /**
   * Task specific messages
   * @type {Message[]}
   * @memberof Task
   */
  public messages?: Message[];

  /**
   * Timestamp when the task was created, returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public createdAt?: Date;

  /**
   * Timestamp when the task status changed to \"QUEUED\", returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public queuedAt?: Date;

  /**
   * Timestamp when the task status changed to to \"RUNNING\", returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public runningAt?: Date;

  /**
   * Timestamp when the task status changed to \"FINISHED\", returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public finishedAt?: Date;

  /**
   * Timestamp when the task status changed to \"ERROR\", returned as UTC expressed in ISO 8601 format: YYYY-MM-DDThh:mm:ssZ
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

  constructor(obj?: Partial<Task>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.status = map(obj.status);
    this.eta = map(obj.eta);
    this.progress = map(obj.progress);
    this.subtasks = mapArray(obj.subtasks, Subtask);
    this.messages = mapArray(obj.messages, Message);
    this.createdAt = map(obj.createdAt, Date);
    this.queuedAt = map(obj.queuedAt, Date);
    this.runningAt = map(obj.runningAt, Date);
    this.finishedAt = map(obj.finishedAt, Date);
    this.errorAt = map(obj.errorAt, Date);
    this.error = map(obj.error, ErrorDetails);
  }
}

export default Task;

