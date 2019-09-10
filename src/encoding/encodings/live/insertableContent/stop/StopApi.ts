import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';

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
   * @summary Stops Currently Running Inserted Content
   * @param {string} encodingId Id of the encoding.
   * @throws {BitmovinError}
   * @memberof StopApi
   */
  public create(encodingId: string): Promise<Response> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Response>('/encoding/encodings/{encoding_id}/live/insertable-content/stop', pathParamMap).then((response) => {
      return map(response, );
    });
  }
}
