import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CeaApi from './cea/CeaApi';
import {getType, map} from '../../../../common/Mapper';

/**
 * CaptionsApi - object-oriented interface
 * @export
 * @class CaptionsApi
 * @extends {BaseAPI}
 */
export default class CaptionsApi extends BaseAPI {
  public cea: CeaApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.cea = new CeaApi(configuration);
  }
}
