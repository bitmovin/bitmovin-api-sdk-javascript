import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import UpdateEncodingRtmpIngestPointRequest from '../../../../models/UpdateEncodingRtmpIngestPointRequest';
import UpdateEncodingRtmpIngestPointResponse from '../../../../models/UpdateEncodingRtmpIngestPointResponse';

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
   * @summary Update the ingest points of a Redundant RTMP Input
   * @param {string} encodingId Id of the encoding.
   * @param {UpdateEncodingRtmpIngestPointRequest} updateEncodingRtmpIngestPointRequest The list of the RTMP ingest points to update.
   * @throws {BitmovinError}
   * @memberof ActionsApi
   */
  public patch(encodingId: string, updateEncodingRtmpIngestPointRequest?: UpdateEncodingRtmpIngestPointRequest): Promise<UpdateEncodingRtmpIngestPointResponse> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.patch<UpdateEncodingRtmpIngestPointResponse>('/encoding/live/encodings/{encoding_id}/actions/update-rtmp-ingest-points', pathParamMap, updateEncodingRtmpIngestPointRequest).then((response) => {
      return map(response, UpdateEncodingRtmpIngestPointResponse);
    });
  }
}
