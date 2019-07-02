import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import ObjectDetectionTimestampResult from '../../../../../../models/ObjectDetectionTimestampResult';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import ObjectDetectionTimestampResultListQueryParams from './ObjectDetectionTimestampResultListQueryParams';

/**
 * ByTimestampApi - object-oriented interface
 * @export
 * @class ByTimestampApi
 * @extends {BaseAPI}
 */
export default class ByTimestampApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary List object detection results grouped by timestamp
   * @param {string} encodingId Id of the encoding
   * @param {string} objectDetectionId Id of the object detection configuration
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ByTimestampApi
   */
  public list(encodingId: string, objectDetectionId: string, queryParams?: ObjectDetectionTimestampResultListQueryParams): Promise<PaginationResponse<ObjectDetectionTimestampResult>> {
    const pathParamMap = {
      encoding_id: encodingId,
      object_detection_id: objectDetectionId
    };
    return this.restClient.get<PaginationResponse<ObjectDetectionTimestampResult>>('/encoding/encodings/{encoding_id}/machine-learning/object-detection/{object_detection_id}/results/by-timestamp', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ObjectDetectionTimestampResult>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ObjectDetectionTimestampResult(i));
      }
      return paginationResponse;
    });
  }
}
