import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import DolbyVisionApi from './dolbyVision/DolbyVisionApi';

/**
 * HdrApi - object-oriented interface
 * @export
 * @class HdrApi
 * @extends {BaseAPI}
 */
export default class HdrApi extends BaseAPI {
  public dolbyVision: DolbyVisionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dolbyVision = new DolbyVisionApi(configuration);
  }
}
