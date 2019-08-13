import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import ByTimestampApi from './byTimestamp/ByTimestampApi';
import ObjectDetectionResult from '../../../../../models/ObjectDetectionResult';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {ObjectDetectionResultListQueryParams, ObjectDetectionResultListQueryParamsBuilder} from './ObjectDetectionResultListQueryParams';
import {getType, map} from '../../../../../common/Mapper';

/**
 * ResultsApi - object-oriented interface
 * @export
 * @class ResultsApi
 * @extends {BaseAPI}
 */
export default class ResultsApi extends BaseAPI {
  public byTimestamp: ByTimestampApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.byTimestamp = new ByTimestampApi(configuration);
  }

  /**
   * @summary List object detection results
   * @param {string} encodingId Id of the encoding
   * @param {string} objectDetectionId Id of the object detection configuration
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof ResultsApi
   */
  public list(encodingId: string, objectDetectionId: string, queryParameters?: ObjectDetectionResultListQueryParams | ((q: ObjectDetectionResultListQueryParamsBuilder) => ObjectDetectionResultListQueryParamsBuilder)): Promise<PaginationResponse<ObjectDetectionResult>> {
    const pathParamMap = {
      encoding_id: encodingId,
      object_detection_id: objectDetectionId
    };
    let queryParams: ObjectDetectionResultListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ObjectDetectionResultListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ObjectDetectionResult>>('/encoding/encodings/{encoding_id}/machine-learning/object-detection/{object_detection_id}/results', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<ObjectDetectionResult>(response);
      if (Array.isArray(paginationResponse.items)) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new ObjectDetectionResult(i));
      }
      return paginationResponse;
    });
  }
}
