import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import TtmlApi from './ttml/TtmlApi';

/**
 * CaptionsApi - object-oriented interface
 * @export
 * @class CaptionsApi
 * @extends {BaseAPI}
 */
export default class CaptionsApi extends BaseAPI {
  public ttml: TtmlApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.ttml = new TtmlApi(configuration);
  }
}
