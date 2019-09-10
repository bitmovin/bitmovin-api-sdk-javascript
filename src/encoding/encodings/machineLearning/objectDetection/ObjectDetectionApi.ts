import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import ResultsApi from './results/ResultsApi';
import BitmovinResource from '../../../../models/BitmovinResource';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import ObjectDetectionConfiguration from '../../../../models/ObjectDetectionConfiguration';
import PaginationResponse from '../../../../models/PaginationResponse';
import {ObjectDetectionConfigurationListQueryParams, ObjectDetectionConfigurationListQueryParamsBuilder} from './ObjectDetectionConfigurationListQueryParams';

/**
 * ObjectDetectionApi - object-oriented interface
 * @export
 * @class ObjectDetectionApi
 * @extends {BaseAPI}
 */
export default class ObjectDetectionApi extends BaseAPI {
  public customdata: CustomdataApi;
  public results: ResultsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
    this.results = new ResultsApi(configuration);
  }

  /**
   * @summary Add object detection configuration to an encoding
   * @param {string} encodingId Id of the encoding
   * @param {ObjectDetectionConfiguration} objectDetectionConfiguration The object detection configuration to be created
   * @throws {BitmovinError}
   * @memberof ObjectDetectionApi
   */
  public create(encodingId: string, objectDetectionConfiguration?: ObjectDetectionConfiguration): Promise<ObjectDetectionConfiguration> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<ObjectDetectionConfiguration>('/encoding/encodings/{encoding_id}/machine-learning/object-detection', pathParamMap, objectDetectionConfiguration).then((response) => {
      return map(response, ObjectDetectionConfiguration);
    });
  }

  /**
   * @summary Delete object detection configuration
   * @param {string} encodingId Id of the encoding
   * @param {string} objectDetectionId Id of the object detection configuration to be deleted
   * @throws {BitmovinError}
   * @memberof ObjectDetectionApi
   */
  public delete(encodingId: string, objectDetectionId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      object_detection_id: objectDetectionId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/machine-learning/object-detection/{object_detection_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get object detection configuration details
   * @param {string} encodingId Id of the encoding
   * @param {string} objectDetectionId Id of the object detection configuration
   * @throws {BitmovinError}
   * @memberof ObjectDetectionApi
   */
  public get(encodingId: string, objectDetectionId: string): Promise<ObjectDetectionConfiguration> {
    const pathParamMap = {
      encoding_id: encodingId,
      object_detection_id: objectDetectionId
    };
    return this.restClient.get<ObjectDetectionConfiguration>('/encoding/encodings/{encoding_id}/machine-learning/object-detection/{object_detection_id}', pathParamMap).then((response) => {
      return map(response, ObjectDetectionConfiguration);
    });
  }

  /**
   * @summary List object detection configurations of an encoding
   * @param {string} encodingId Id of the encoding
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof ObjectDetectionApi
   */
  public list(encodingId: string, queryParameters?: ObjectDetectionConfigurationListQueryParams | ((q: ObjectDetectionConfigurationListQueryParamsBuilder) => ObjectDetectionConfigurationListQueryParamsBuilder)): Promise<PaginationResponse<ObjectDetectionConfiguration>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: ObjectDetectionConfigurationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new ObjectDetectionConfigurationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<ObjectDetectionConfiguration>>('/encoding/encodings/{encoding_id}/machine-learning/object-detection', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<ObjectDetectionConfiguration>(response, ObjectDetectionConfiguration);
    });
  }
}
