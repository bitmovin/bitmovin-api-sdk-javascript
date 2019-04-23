import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import DvbsubApi from './dvbsub/DvbsubApi';
import SrtApi from './srt/SrtApi';

/**
 * BurnInSubtitlesApi - object-oriented interface
 * @export
 * @class BurnInSubtitlesApi
 * @extends {BaseAPI}
 */
export default class BurnInSubtitlesApi extends BaseAPI {
  public dvbsub: DvbsubApi;
  public srt: SrtApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dvbsub = new DvbsubApi(configuration);
    this.srt = new SrtApi(configuration);
  }
}
