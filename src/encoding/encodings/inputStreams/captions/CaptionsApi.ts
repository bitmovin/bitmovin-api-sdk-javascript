import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import Cea608Api from './cea608/Cea608Api';
import Cea708Api from './cea708/Cea708Api';

/**
 * CaptionsApi - object-oriented interface
 * @export
 * @class CaptionsApi
 * @extends {BaseAPI}
 */
export default class CaptionsApi extends BaseAPI {
  public cea608: Cea608Api;
  public cea708: Cea708Api;

  constructor(configuration: Configuration) {
    super(configuration);
    this.cea608 = new Cea608Api(configuration);
    this.cea708 = new Cea708Api(configuration);
  }
}
