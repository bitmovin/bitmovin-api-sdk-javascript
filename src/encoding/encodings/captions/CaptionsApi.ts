import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import SccApi from './scc/SccApi';
import {getType, map} from '../../../common/Mapper';

/**
 * CaptionsApi - object-oriented interface
 * @export
 * @class CaptionsApi
 * @extends {BaseAPI}
 */
export default class CaptionsApi extends BaseAPI {
  public scc: SccApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.scc = new SccApi(configuration);
  }
}
