import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import MediaPointsApi from './mediaPoints/MediaPointsApi';

/**
 * EsamApi - object-oriented interface
 * @export
 * @class EsamApi
 * @extends {BaseAPI}
 */
export default class EsamApi extends BaseAPI {
  public mediaPoints: MediaPointsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.mediaPoints = new MediaPointsApi(configuration);
  }
}
