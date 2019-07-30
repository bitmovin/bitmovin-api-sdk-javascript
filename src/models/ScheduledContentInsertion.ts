import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import ScheduledContentInsertionStatus from './ScheduledContentInsertionStatus';

/**
 * @export
 * @class ScheduledContentInsertion
 */
export class ScheduledContentInsertion extends BitmovinResource {
  /**
   * Id of the insertable content to play instead of the live stream (required)
   * @type {string}
   * @memberof ScheduledContentInsertion
   */
  public contentId: string;

  /**
   * Time to to play the content in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof ScheduledContentInsertion
   */
  public runAt?: Date;

  /**
   * Duration for how long to play the content. Cut off if shorter, loop if longer than actual duration.
   * @type {number}
   * @memberof ScheduledContentInsertion
   */
  public durationInSeconds?: number;

  /**
   * Status of the scheduled content insertion.
   * @type {ScheduledContentInsertionStatus}
   * @memberof ScheduledContentInsertion
   */
  public status?: ScheduledContentInsertionStatus;

  constructor(obj: Partial<ScheduledContentInsertion>) {
    super(obj);
    this.contentId = map(obj.contentId);
    this.runAt = map(obj.runAt, Date);
    this.durationInSeconds = map(obj.durationInSeconds);
    this.status = map(obj.status);
  }
}

export default ScheduledContentInsertion;

