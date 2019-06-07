import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import InputStreamTypeResponse from '../../../../models/InputStreamTypeResponse';

/**
 * TypeApi - object-oriented interface
 * @export
 * @class TypeApi
 * @extends {BaseAPI}
 */
export default class TypeApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Get Input Stream Type
   * @param {string} encodingId Id of the encoding
   * @param {string} inputStreamId Id of the input stream
   * @throws {RequiredError}
   * @memberof TypeApi
   */
  public get(encodingId: string, inputStreamId: string): Promise<InputStreamTypeResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      input_stream_id: inputStreamId
    };
    return this.restClient.get<InputStreamTypeResponse>('/encoding/encodings/{encoding_id}/input-streams/{input_stream_id}/type', pathParamMap).then((response) => {
      return new InputStreamTypeResponse(response);
    });
  }
}
