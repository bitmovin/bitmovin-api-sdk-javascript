import {map, mapArray} from '../common/Mapper';

/**
 * @export
 * @class AgentSessionListItem
 */
export class AgentSessionListItem {
  /**
   * Session ID (required)
   * @type {string}
   * @memberof AgentSessionListItem
   */
  public sessionId?: string;

  /**
   * Session title
   * @type {string}
   * @memberof AgentSessionListItem
   */
  public title?: string;

  /**
   * Last update time in seconds
   * @type {number}
   * @memberof AgentSessionListItem
   */
  public lastUpdateTimeSeconds?: number;

  constructor(obj?: Partial<AgentSessionListItem>) {
    if(!obj) {
      return;
    }
    this.sessionId = map(obj.sessionId);
    this.title = map(obj.title);
    this.lastUpdateTimeSeconds = map(obj.lastUpdateTimeSeconds);
  }
}

export default AgentSessionListItem;

