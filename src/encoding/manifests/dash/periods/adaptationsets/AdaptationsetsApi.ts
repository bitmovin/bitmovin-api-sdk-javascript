import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import TypeApi from './type/TypeApi';
import AudioApi from './audio/AudioApi';
import VideoApi from './video/VideoApi';
import SubtitleApi from './subtitle/SubtitleApi';
import ImageApi from './image/ImageApi';
import RepresentationsApi from './representations/RepresentationsApi';
import ContentprotectionApi from './contentprotection/ContentprotectionApi';
import AdaptationSet from '../../../../../models/AdaptationSet';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {AdaptationSetListQueryParams, AdaptationSetListQueryParamsBuilder} from './AdaptationSetListQueryParams';

/**
 * AdaptationsetsApi - object-oriented interface
 * @export
 * @class AdaptationsetsApi
 * @extends {BaseAPI}
 */
export default class AdaptationsetsApi extends BaseAPI {
  public type: TypeApi;
  public audio: AudioApi;
  public video: VideoApi;
  public subtitle: SubtitleApi;
  public image: ImageApi;
  public representations: RepresentationsApi;
  public contentprotection: ContentprotectionApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.audio = new AudioApi(configuration);
    this.video = new VideoApi(configuration);
    this.subtitle = new SubtitleApi(configuration);
    this.image = new ImageApi(configuration);
    this.representations = new RepresentationsApi(configuration);
    this.contentprotection = new ContentprotectionApi(configuration);
  }

  /**
   * @summary List all AdaptationSets
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the adaptation set
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof AdaptationsetsApi
   */
  public list(manifestId: string, periodId: string, queryParameters?: AdaptationSetListQueryParams | ((q: AdaptationSetListQueryParamsBuilder) => AdaptationSetListQueryParamsBuilder)): Promise<PaginationResponse<AdaptationSet>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    let queryParams: AdaptationSetListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new AdaptationSetListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<AdaptationSet>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/adaptationsets', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<AdaptationSet>(response, AdaptationSet);
    });
  }
}
