import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import CeaApi from './cea/CeaApi';
import DvbsubApi from './dvbsub/DvbsubApi';
import TtmlApi from './ttml/TtmlApi';
import WebvttApi from './webvtt/WebvttApi';

/**
 * ExtractApi - object-oriented interface
 * @export
 * @class ExtractApi
 * @extends {BaseAPI}
 */
export default class ExtractApi extends BaseAPI {
  public cea: CeaApi;
  public dvbsub: DvbsubApi;
  public ttml: TtmlApi;
  public webvtt: WebvttApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.cea = new CeaApi(configuration);
    this.dvbsub = new DvbsubApi(configuration);
    this.ttml = new TtmlApi(configuration);
    this.webvtt = new WebvttApi(configuration);
  }
}
