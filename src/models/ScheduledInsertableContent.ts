import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';
import ScheduledInsertableContentStatus from './ScheduledInsertableContentStatus';

/**
 * @export
 * @class ScheduledInsertableContent
 */
export class ScheduledInsertableContent extends BitmovinResource {
  /**
   * Id of the insertable content to play instead of the live stream
   * @type {string}
   * @memberof ScheduledInsertableContent
   */
  public contentId?: string;

  /**
   * Time to to play the content in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof ScheduledInsertableContent
   */
  public runAt?: Date;

  /**
   * Duration for how long to play the content. Cut off if shorter, loop if longer than actual duration.
   * @type {number}
   * @memberof ScheduledInsertableContent
   */
  public durationInSeconds?: number;

  /**
   * Status of the scheduled insertable content.
   * @type {ScheduledInsertableContentStatus}
   * @memberof ScheduledInsertableContent
   */
  public status?: ScheduledInsertableContentStatus;

  constructor(obj: Partial<ScheduledInsertableContent>) {
    super(obj);

    this.contentId = obj.contentId;
    this.runAt = map<Date>(obj.runAt, Date);
    this.durationInSeconds = obj.durationInSeconds;
    this.status = obj.status;
  }
}

export default ScheduledInsertableContent;

