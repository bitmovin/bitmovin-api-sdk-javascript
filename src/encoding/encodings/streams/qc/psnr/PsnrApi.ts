import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import PsnrQualityMetric from '../../../../../models/PsnrQualityMetric';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {PsnrQualityMetricListQueryParams, PsnrQualityMetricListQueryParamsBuilder} from './PsnrQualityMetricListQueryParams';

/**
 * PsnrApi - object-oriented interface
 * @export
 * @class PsnrApi
 * @extends {BaseAPI}
 */
export default class PsnrApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Activate PSNR quality metrics for the selected stream
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @throws {BitmovinError}
   * @memberof PsnrApi
   */
  public create(encodingId: string, streamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/qc/psnr', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Stream PSNR metrics
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof PsnrApi
   */
  public list(encodingId: string, streamId: string, queryParameters?: PsnrQualityMetricListQueryParams | ((q: PsnrQualityMetricListQueryParamsBuilder) => PsnrQualityMetricListQueryParamsBuilder)): Promise<PaginationResponse<PsnrQualityMetric>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    let queryParams: PsnrQualityMetricListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new PsnrQualityMetricListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<PsnrQualityMetric>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/qc/psnr', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<PsnrQualityMetric>(response, PsnrQualityMetric);
    });
  }
}
