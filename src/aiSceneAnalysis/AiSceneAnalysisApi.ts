import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import AnalysesApi from './analyses/AnalysesApi';
import LiveAnalysesApi from './liveAnalyses/LiveAnalysesApi';

/**
 * AiSceneAnalysisApi - object-oriented interface
 * @export
 * @class AiSceneAnalysisApi
 * @extends {BaseAPI}
 */
export default class AiSceneAnalysisApi extends BaseAPI {
  public analyses: AnalysesApi;
  public liveAnalyses: LiveAnalysesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.analyses = new AnalysesApi(configuration);
    this.liveAnalyses = new LiveAnalysesApi(configuration);
  }
}
