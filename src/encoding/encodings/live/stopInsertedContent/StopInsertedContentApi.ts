import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';

/**
 * StopInsertedContentApi - object-oriented interface
 * @export
 * @class StopInsertedContentApi
 * @extends {BaseAPI}
 */
export default class StopInsertedContentApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Stop Currently Running Inserted Content
   * @param {string} encodingId Id of the encoding.
   * @throws {RequiredError}
   * @memberof StopInsertedContentApi
   */
  public create(encodingId: string): Promise<Response> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<Response>('/encoding/encodings/{encoding_id}/live/stop-inserted-content', pathParamMap).then((response) => {
      return response;
    });
  }
}
