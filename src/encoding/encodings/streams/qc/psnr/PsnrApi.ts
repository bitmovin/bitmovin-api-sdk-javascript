import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import PsnrQualityMetric from '../../../../../models/PsnrQualityMetric';
import PaginationResponse from '../../../../../models/PaginationResponse';
import PsnrQualityMetricListQueryParams from './PsnrQualityMetricListQueryParams';

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
   * @throws {RequiredError}
   * @memberof PsnrApi
   */
  public create(encodingId: string, streamId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.post<BitmovinResponse>('/encoding/encodings/{encoding_id}/streams/{stream_id}/qc/psnr', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Get Stream PSNR metrics
   * @param {string} encodingId Id of the encoding.
   * @param {string} streamId Id of the stream.
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof PsnrApi
   */
  public list(encodingId: string, streamId: string, queryParams?: PsnrQualityMetricListQueryParams): Promise<PaginationResponse<PsnrQualityMetric>> {
    const pathParamMap = {
      encoding_id: encodingId,
      stream_id: streamId
    };
    return this.restClient.get<PaginationResponse<PsnrQualityMetric>>('/encoding/encodings/{encoding_id}/streams/{stream_id}/qc/psnr', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<PsnrQualityMetric>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new PsnrQualityMetric(i));
      }
      return paginationResponse;
    });
  }
}
