import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import PlayerVersion from '../../../../models/PlayerVersion';

/**
 * LatestApi - object-oriented interface
 * @export
 * @class LatestApi
 * @extends {BaseAPI}
 */
export default class LatestApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Latest Player Version for Channel
   * @param {string} channelName Name of the channel to get the player versions for.
   * @throws {BitmovinError}
   * @memberof LatestApi
   */
  public get(channelName: string): Promise<PlayerVersion> {
    const pathParamMap = {
      channel_name: channelName
    };
    return this.restClient.get<PlayerVersion>('/player/channels/{channel_name}/versions/latest', pathParamMap).then((response) => {
      return map(response, PlayerVersion);
    });
  }
}
