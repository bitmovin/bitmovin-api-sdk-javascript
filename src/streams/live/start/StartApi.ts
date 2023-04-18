import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';

/**
 * StartApi - object-oriented interface
 * @export
 * @class StartApi
 * @extends {BaseAPI}
 */
export default class StartApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Start live stream by id
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof StartApi
   */
  public update(streamId: string): Promise<Response> {
    const pathParamMap = {
      stream_id: streamId
    };
    return this.restClient.put<Response>('/streams/live/{stream_id}/start', pathParamMap).then((response) => {
      return map(response, );
    });
  }
}
