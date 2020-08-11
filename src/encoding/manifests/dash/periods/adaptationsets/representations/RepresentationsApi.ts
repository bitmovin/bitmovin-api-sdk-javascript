import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import VttApi from './vtt/VttApi';
import Fmp4Api from './fmp4/Fmp4Api';
import ChunkedTextApi from './chunkedText/ChunkedTextApi';
import CmafApi from './cmaf/CmafApi';
import Mp4Api from './mp4/Mp4Api';
import WebmApi from './webm/WebmApi';
import ProgressiveWebmApi from './progressiveWebm/ProgressiveWebmApi';

/**
 * RepresentationsApi - object-oriented interface
 * @export
 * @class RepresentationsApi
 * @extends {BaseAPI}
 */
export default class RepresentationsApi extends BaseAPI {
  public vtt: VttApi;
  public fmp4: Fmp4Api;
  public chunkedText: ChunkedTextApi;
  public cmaf: CmafApi;
  public mp4: Mp4Api;
  public webm: WebmApi;
  public progressiveWebm: ProgressiveWebmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.vtt = new VttApi(configuration);
    this.fmp4 = new Fmp4Api(configuration);
    this.chunkedText = new ChunkedTextApi(configuration);
    this.cmaf = new CmafApi(configuration);
    this.mp4 = new Mp4Api(configuration);
    this.webm = new WebmApi(configuration);
    this.progressiveWebm = new ProgressiveWebmApi(configuration);
  }
}
