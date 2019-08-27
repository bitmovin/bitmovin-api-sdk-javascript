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
   * Timestamp when the task was created, formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public createdAt?: Date;

  /**
   * Timestamp when the task status changed to \"QUEUED\", formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public queuedAt?: Date;

  /**
   * Timestamp when the task status changed to to \"RUNNING\", formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public runningAt?: Date;

  /**
   * Timestamp when the task status changed to \"FINISHED\", formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof Task
   */
  public finishedAt?: Date;

  /**
   * Timestamp when the task status changed to \"ERROR\", formatted in UTC: YYYY-MM-DDThh:mm:ssZ
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

  constructor(obj: Partial<Task>) {
    super(obj);

    this.status = obj.status;
    this.eta = obj.eta;
    this.progress = obj.progress;
    this.subtasks = map<Subtask>(obj.subtasks, Subtask) || [];
    this.messages = map<Message>(obj.messages, Message) || [];
    this.createdAt = map<Date>(obj.createdAt, Date);
    this.queuedAt = map<Date>(obj.queuedAt, Date);
    this.runningAt = map<Date>(obj.runningAt, Date);
    this.finishedAt = map<Date>(obj.finishedAt, Date);
    this.errorAt = map<Date>(obj.errorAt, Date);
    this.error = map<ErrorDetails>(obj.error, ErrorDetails);
  }
}

export default Task;

