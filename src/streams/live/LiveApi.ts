import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import StreamsLiveUpdateRequest from '../../models/StreamsLiveUpdateRequest';

/**
 * LiveApi - object-oriented interface
 * @export
 * @class LiveApi
 * @extends {BaseAPI}
 */
export default class LiveApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Update stream by id
   * @param {string} streamId Id of the stream.
   * @param {StreamsLiveUpdateRequest} streamsLiveUpdateRequest Stream fields to update.
   * @throws {BitmovinError}
   * @memberof LiveApi
   */
  public patchStreamsLive(streamId: string, streamsLiveUpdateRequest?: StreamsLiveUpdateRequest): Promise<StreamsLiveUpdateRequest> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.patch<StreamsLiveUpdateRequest>('/streams/live/{stream_id}', pathParamMap, streamsLiveUpdateRequest).then((response) => {
      return map(response, StreamsLiveUpdateRequest);
    });
  }
}
