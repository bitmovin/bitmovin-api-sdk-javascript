import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import AgentSessionHistoryResponse from '../../../models/AgentSessionHistoryResponse';
import AgentSessionListResponse from '../../../models/AgentSessionListResponse';
import AgentSessionResponse from '../../../models/AgentSessionResponse';

/**
 * SessionsApi - object-oriented interface
 * @export
 * @class SessionsApi
 * @extends {BaseAPI}
 */
export default class SessionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Create Agent Session
   * @param {string} xUserId User ID used to scope agent sessions
   * @throws {BitmovinError}
   * @memberof SessionsApi
   */
  public create(): Promise<AgentSessionResponse> {
    return this.restClient.post<AgentSessionResponse>('/agents/assistant/sessions', {}).then((response) => {
      return map(response, AgentSessionResponse);
    });
  }

  /**
   * @summary Delete Agent Session
   * @param {string} sessionId Id of the session
   * @param {string} xUserId User ID used to scope agent sessions
   * @throws {BitmovinError}
   * @memberof SessionsApi
   */
  public delete(sessionId: string, ): Promise<AgentSessionResponse> {
    const pathParamMap = {
      session_id: sessionId
    };
    return this.restClient.delete<AgentSessionResponse>('/agents/assistant/sessions/{session_id}', pathParamMap).then((response) => {
      return map(response, AgentSessionResponse);
    });
  }

  /**
   * @summary Get Agent Session Details
   * @param {string} sessionId Id of the session
   * @param {string} xUserId User ID used to scope agent sessions
   * @throws {BitmovinError}
   * @memberof SessionsApi
   */
  public get(sessionId: string, ): Promise<AgentSessionHistoryResponse> {
    const pathParamMap = {
      session_id: sessionId
    };
    return this.restClient.get<AgentSessionHistoryResponse>('/agents/assistant/sessions/{session_id}', pathParamMap).then((response) => {
      return map(response, AgentSessionHistoryResponse);
    });
  }

  /**
   * @summary List Agent Sessions
   * @param {string} xUserId User ID used to scope agent sessions
   * @throws {BitmovinError}
   * @memberof SessionsApi
   */
  public list(): Promise<AgentSessionListResponse> {
    return this.restClient.get<AgentSessionListResponse>('/agents/assistant/sessions', {}).then((response) => {
      return map(response, AgentSessionListResponse);
    });
  }
}
