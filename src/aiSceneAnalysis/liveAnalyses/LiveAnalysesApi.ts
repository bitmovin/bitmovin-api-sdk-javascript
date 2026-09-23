import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import ResultsApi from './results/ResultsApi';
import AiSceneAnalysisLiveCreateRequest from '../../models/AiSceneAnalysisLiveCreateRequest';
import AiSceneAnalysisLiveResponse from '../../models/AiSceneAnalysisLiveResponse';
import BitmovinResponse from '../../models/BitmovinResponse';
import PaginationResponse from '../../models/PaginationResponse';
import {AiSceneAnalysisLiveResponseListQueryParams, AiSceneAnalysisLiveResponseListQueryParamsBuilder} from './AiSceneAnalysisLiveResponseListQueryParams';

/**
 * LiveAnalysesApi - object-oriented interface
 * @export
 * @class LiveAnalysesApi
 * @extends {BaseAPI}
 */
export default class LiveAnalysesApi extends BaseAPI {
  public results: ResultsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.results = new ResultsApi(configuration);
  }

  /**
   * @summary Create Live Analysis
   * @param {AiSceneAnalysisLiveCreateRequest} aiSceneAnalysisLiveCreateRequest Live Analysis configuration
   * @throws {BitmovinError}
   * @memberof LiveAnalysesApi
   */
  public create(aiSceneAnalysisLiveCreateRequest?: AiSceneAnalysisLiveCreateRequest): Promise<AiSceneAnalysisLiveResponse> {
    return this.restClient.post<AiSceneAnalysisLiveResponse>('/ai-scene-analysis/live-analyses', {}, aiSceneAnalysisLiveCreateRequest).then((response) => {
      return map(response, AiSceneAnalysisLiveResponse);
    });
  }

  /**
   * @summary Delete Live Analysis
   * @param {string} analysisId ID of the Live Analysis
   * @throws {BitmovinError}
   * @memberof LiveAnalysesApi
   */
  public delete(analysisId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      analysis_id: analysisId
    };
    return this.restClient.delete<BitmovinResponse>('/ai-scene-analysis/live-analyses/{analysis_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Get Live Analysis details
   * @param {string} analysisId ID of the Live Analysis
   * @throws {BitmovinError}
   * @memberof LiveAnalysesApi
   */
  public get(analysisId: string): Promise<AiSceneAnalysisLiveResponse> {
    const pathParamMap = {
      analysis_id: analysisId
    };
    return this.restClient.get<AiSceneAnalysisLiveResponse>('/ai-scene-analysis/live-analyses/{analysis_id}', pathParamMap).then((response) => {
      return map(response, AiSceneAnalysisLiveResponse);
    });
  }

  /**
   * @summary List Live Analyses
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof LiveAnalysesApi
   */
  public list(queryParameters?: AiSceneAnalysisLiveResponseListQueryParams | ((q: AiSceneAnalysisLiveResponseListQueryParamsBuilder) => AiSceneAnalysisLiveResponseListQueryParamsBuilder)): Promise<PaginationResponse<AiSceneAnalysisLiveResponse>> {
    let queryParams: AiSceneAnalysisLiveResponseListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AiSceneAnalysisLiveResponseListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AiSceneAnalysisLiveResponse>>('/ai-scene-analysis/live-analyses', {}, queryParams).then((response) => {
      return new PaginationResponse<AiSceneAnalysisLiveResponse>(response, AiSceneAnalysisLiveResponse);
    });
  }

  /**
   * @summary Start Live Analysis
   * @param {string} analysisId ID of the Live Analysis
   * @throws {BitmovinError}
   * @memberof LiveAnalysesApi
   */
  public start(analysisId: string): Promise<AiSceneAnalysisLiveResponse> {
    const pathParamMap = {
      analysis_id: analysisId
    };
    return this.restClient.post<AiSceneAnalysisLiveResponse>('/ai-scene-analysis/live-analyses/{analysis_id}/start', pathParamMap).then((response) => {
      return map(response, AiSceneAnalysisLiveResponse);
    });
  }

  /**
   * @summary Stop Live Analysis
   * @param {string} analysisId ID of the Live Analysis
   * @throws {BitmovinError}
   * @memberof LiveAnalysesApi
   */
  public stop(analysisId: string): Promise<AiSceneAnalysisLiveResponse> {
    const pathParamMap = {
      analysis_id: analysisId
    };
    return this.restClient.post<AiSceneAnalysisLiveResponse>('/ai-scene-analysis/live-analyses/{analysis_id}/stop', pathParamMap).then((response) => {
      return map(response, AiSceneAnalysisLiveResponse);
    });
  }
}
