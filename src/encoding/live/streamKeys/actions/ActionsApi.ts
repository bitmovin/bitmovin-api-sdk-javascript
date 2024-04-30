import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import StreamKeysUnassignAction from '../../../../models/StreamKeysUnassignAction';

/**
 * ActionsApi - object-oriented interface
 * @export
 * @class ActionsApi
 * @extends {BaseAPI}
 */
export default class ActionsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Unassign stream keys
   * @param {StreamKeysUnassignAction} streamKeysUnassignAction The action payload for unassigning stream keys
   * @throws {BitmovinError}
   * @memberof ActionsApi
   */
  public unassign(streamKeysUnassignAction?: StreamKeysUnassignAction): Promise<StreamKeysUnassignAction> {
    return this.restClient.post<StreamKeysUnassignAction>('/encoding/live/stream-keys/actions/unassign', {}, streamKeysUnassignAction).then((response) => {
      return map(response, StreamKeysUnassignAction);
    });
  }
}
