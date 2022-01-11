import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import {map, mapArray} from '../../../../../../common/Mapper';
import TypeApi from './type/TypeApi';
import VttApi from './vtt/VttApi';
import ImscApi from './imsc/ImscApi';
import SpriteApi from './sprite/SpriteApi';
import Fmp4Api from './fmp4/Fmp4Api';
import ChunkedTextApi from './chunkedText/ChunkedTextApi';
import CmafApi from './cmaf/CmafApi';
import Mp4Api from './mp4/Mp4Api';
import WebmApi from './webm/WebmApi';
import ProgressiveWebmApi from './progressiveWebm/ProgressiveWebmApi';
import DashRepresentation from '../../../../../../models/DashRepresentation';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import {DashRepresentationListQueryParams, DashRepresentationListQueryParamsBuilder} from './DashRepresentationListQueryParams';

/**
 * RepresentationsApi - object-oriented interface
 * @export
 * @class RepresentationsApi
 * @extends {BaseAPI}
 */
export default class RepresentationsApi extends BaseAPI {
  public type: TypeApi;
  public vtt: VttApi;
  public imsc: ImscApi;
  public sprite: SpriteApi;
  public fmp4: Fmp4Api;
  public chunkedText: ChunkedTextApi;
  public cmaf: CmafApi;
  public mp4: Mp4Api;
  public webm: WebmApi;
  public progressiveWebm: ProgressiveWebmApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.vtt = new VttApi(configuration);
    this.imsc = new ImscApi(configuration);
    this.sprite = new SpriteApi(configuration);
    this.fmp4 = new Fmp4Api(configuration);
    this.chunkedText = new ChunkedTextApi(configuration);
    this.cmaf = new CmafApi(configuration);
    this.mp4 = new Mp4Api(configuration);
    this.webm = new WebmApi(configuration);
    this.progressiveWebm = new ProgressiveWebmApi(configuration);
  }

  /**
   * @summary List all DASH Representations
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} adaptationsetId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof RepresentationsApi
   */
  public list(manifestId: string, periodId: string, adaptationsetId: string, queryParameters?: DashRepresentationListQueryParams | ((q: DashRepresentationListQueryParamsBuilder) => DashRepresentationListQueryParamsBuilder)): Promise<PaginationResponse<DashRepresentation>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      adaptationset_id: adaptationsetId
    };
    let queryParams: DashRepresentationListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new DashRepresentationListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<DashRepresentation>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets/{adaptationset_id}/representations', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<DashRepresentation>(response, DashRepresentation);
    });
  }
}
