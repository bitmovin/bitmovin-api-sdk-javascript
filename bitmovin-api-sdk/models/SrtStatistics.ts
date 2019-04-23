import {map} from '../common/Mapper';
import SrtStatisticLink from './SrtStatisticLink';
import SrtStatisticRecv from './SrtStatisticRecv';
import SrtStatisticSend from './SrtStatisticSend';
import SrtStatisticWindow from './SrtStatisticWindow';

/**
 * @export
 * @class SrtStatistics
 */
export default class SrtStatistics {
  constructor(obj: any) {
    this.id = map(obj.id);
    this.createdAt = map(obj.createdAt);
    this.encodingId = map(obj.encodingId);
    this.orgId = map(obj.orgId);
    this.userId = map(obj.userId);
    this.link = map<SrtStatisticLink>(obj.link, SrtStatisticLink);
    this.window = map<SrtStatisticWindow>(obj.window, SrtStatisticWindow);
    this.recv = map<SrtStatisticRecv>(obj.recv, SrtStatisticRecv);
    this.send = map<SrtStatisticSend>(obj.send, SrtStatisticSend);
  }

  /**
   * UUID of the statistic event
   * @type {string}
   * @memberof SrtStatistics
   */
  public id?: string;
  /**
   * Timestamp when the srt statistics event was created, formatted in UTC: YYYY-MM-DDThh:mm:ssZ
   * @type {Date}
   * @memberof SrtStatistics
   */
  public createdAt?: Date;
  /**
   * UUID of an encoding
   * @type {string}
   * @memberof SrtStatistics
   */
  public encodingId?: string;
  /**
   * UUID of the associated organization
   * @type {string}
   * @memberof SrtStatistics
   */
  public orgId?: string;
  /**
   * UUID of the associated api-user
   * @type {string}
   * @memberof SrtStatistics
   */
  public userId?: string;
  /**
   * @type {SrtStatisticLink}
   * @memberof SrtStatistics
   */
  public link?: SrtStatisticLink;
  /**
   * @type {SrtStatisticWindow}
   * @memberof SrtStatistics
   */
  public window?: SrtStatisticWindow;
  /**
   * @type {SrtStatisticRecv}
   * @memberof SrtStatistics
   */
  public recv?: SrtStatisticRecv;
  /**
   * @type {SrtStatisticSend}
   * @memberof SrtStatistics
   */
  public send?: SrtStatisticSend;
}
