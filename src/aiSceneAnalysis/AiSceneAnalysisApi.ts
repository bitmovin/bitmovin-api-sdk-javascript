import {BaseAPI} from '../common/BaseAPI';
import Configuration from '../common/Configuration';
import {map, mapArray} from '../common/Mapper';
import AnalysesApi from './analyses/AnalysesApi';

/**
 * AiSceneAnalysisApi - object-oriented interface
 * @export
 * @class AiSceneAnalysisApi
 * @extends {BaseAPI}
 */
export default class AiSceneAnalysisApi extends BaseAPI {
  public analyses: AnalysesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.analyses = new AnalysesApi(configuration);
  }
}
