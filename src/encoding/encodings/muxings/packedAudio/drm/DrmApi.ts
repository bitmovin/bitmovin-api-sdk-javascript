import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import AesApi from './aes/AesApi';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public aes: AesApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.aes = new AesApi(configuration);
  }
}
