import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import StreamDetails from '../../../../models/StreamDetails';
import PaginationResponse from '../../../../models/PaginationResponse';

/**
 * InputsApi - object-oriented interface
 * @export
 * @class InputsApi
 * @extends {BaseAPI}
 */
export default class InputsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Stream Input Analysis Details
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof InputsApi
   */
  public list(encodingId: string, streamId: string): Promise<PaginationResponse<StreamDetails>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<PaginationResponse<StreamDetails>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/inputs', pathParamMap).then((response) => {
      return new PaginationResponse<StreamDetails>(response, StreamDetails);
    });
  }
}
