import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import ObjectDetectionTimestampResult from '../../../../../../models/ObjectDetectionTimestampResult';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {ObjectDetectionTimestampResultListQueryParams, ObjectDetectionTimestampResultListQueryParamsBuilder} from './ObjectDetectionTimestampResultListQueryParams';

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
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ByTimestampApi
   */
  public list(encodingId: string, objectDetectionId: string, queryParameters?: ObjectDetectionTimestampResultListQueryParams | ((q: ObjectDetectionTimestampResultListQueryParamsBuilder) => ObjectDetectionTimestampResultListQueryParamsBuilder)): Promise<PaginationResponse<ObjectDetectionTimestampResult>> {
    const pathParamMap = {
      encoding_id: encodingId,
      object_detection_id: objectDetectionId
    };
    let queryParams: ObjectDetectionTimestampResultListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ObjectDetectionTimestampResultListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ObjectDetectionTimestampResult>>('/encoding/encodings/{encoding_id}/machine-learning/object-detection/{object_detection_id}/results/by-timestamp', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ObjectDetectionTimestampResult>(response, ObjectDetectionTimestampResult);
    });
  }
}
