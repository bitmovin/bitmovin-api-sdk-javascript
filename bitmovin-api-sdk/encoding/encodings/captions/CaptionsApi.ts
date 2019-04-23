import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import ExtractApi from './extract/ExtractApi';
import SccApi from './scc/SccApi';

/**
 * CaptionsApi - object-oriented interface
 * @export
 * @class CaptionsApi
 * @extends {BaseAPI}
 */
export default class CaptionsApi extends BaseAPI {
  public extract: ExtractApi;
  public scc: SccApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.extract = new ExtractApi(configuration);
    this.scc = new SccApi(configuration);
  }
}
