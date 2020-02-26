import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import CencApi from './cenc/CencApi';
import SpekeApi from './speke/SpekeApi';

/**
 * DrmApi - object-oriented interface
 * @export
 * @class DrmApi
 * @extends {BaseAPI}
 */
export default class DrmApi extends BaseAPI {
  public cenc: CencApi;
  public speke: SpekeApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.cenc = new CencApi(configuration);
    this.speke = new SpekeApi(configuration);
  }
}
