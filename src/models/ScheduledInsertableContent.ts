import {map, mapArray} from '../common/Mapper';
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

  constructor(obj?: Partial<ScheduledInsertableContent>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.contentId = map(obj.contentId);
    this.runAt = map(obj.runAt, Date);
    this.durationInSeconds = map(obj.durationInSeconds);
    this.status = map(obj.status);
  }
}

export default ScheduledInsertableContent;

