import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import DvbsubApi from './dvbsub/DvbsubApi';
import SrtApi from './srt/SrtApi';
import AssaApi from './assa/AssaApi';

/**
 * BurnInSubtitlesApi - object-oriented interface
 * @export
 * @class BurnInSubtitlesApi
 * @extends {BaseAPI}
 */
export default class BurnInSubtitlesApi extends BaseAPI {
  public dvbsub: DvbsubApi;
  public srt: SrtApi;
  public assa: AssaApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.dvbsub = new DvbsubApi(configuration);
    this.srt = new SrtApi(configuration);
    this.assa = new AssaApi(configuration);
  }
}
