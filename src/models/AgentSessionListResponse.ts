import {map, mapArray} from '../common/Mapper';
import AgentSessionListItem from './AgentSessionListItem';

/**
 * @export
 * @class AgentSessionListResponse
 */
export class AgentSessionListResponse {
  /**
   * Agent application name (required)
   * @type {string}
   * @memberof AgentSessionListResponse
   */
  public appName?: string;

  /**
   * User ID (required)
   * @type {string}
   * @memberof AgentSessionListResponse
   */
  public userId?: string;

  /**
   * Sessions for the user (required)
   * @type {AgentSessionListItem[]}
   * @memberof AgentSessionListResponse
   */
  public sessions?: AgentSessionListItem[];

  constructor(obj?: Partial<AgentSessionListResponse>) {
    if(!obj) {
      return;
    }
    this.appName = map(obj.appName);
    this.userId = map(obj.userId);
    this.sessions = mapArray(obj.sessions, AgentSessionListItem);
  }
}

export default AgentSessionListResponse;

