import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';

/**
 * StopApi - object-oriented interface
 * @export
 * @class StopApi
 * @extends {BaseAPI}
 */
export default class StopApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Stop live stream by id
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof StopApi
   */
  public update(streamId: string): Promise<Response> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.put<Response>('/streams/live/{stream_id}/stop', pathParamMap).then((response) => {
      return map(response, );
    });
  }
}
