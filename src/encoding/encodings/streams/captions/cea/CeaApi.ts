import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import SccApi from './scc/SccApi';
import SrtApi from './srt/SrtApi';

/**
 * CeaApi - object-oriented interface
 * @export
 * @class CeaApi
 * @extends {BaseAPI}
 */
export default class CeaApi extends BaseAPI {
  public scc: SccApi;
  public srt: SrtApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.scc = new SccApi(configuration);
    this.srt = new SrtApi(configuration);
  }
}
