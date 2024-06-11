import {BaseAPI} from '../../common/BaseAPI';
import Configuration from '../../common/Configuration';
import {map, mapArray} from '../../common/Mapper';
import TypeApi from './type/TypeApi';
import ConformApi from './conform/ConformApi';
import WatermarkApi from './watermark/WatermarkApi';
import AudioVolumeApi from './audioVolume/AudioVolumeApi';
import AzureSpeechToCaptionsApi from './azureSpeechToCaptions/AzureSpeechToCaptionsApi';
import EnhancedWatermarkApi from './enhancedWatermark/EnhancedWatermarkApi';
import CropApi from './crop/CropApi';
import RotateApi from './rotate/RotateApi';
import DeinterlaceApi from './deinterlace/DeinterlaceApi';
import EnhancedDeinterlaceApi from './enhancedDeinterlace/EnhancedDeinterlaceApi';
import AudioMixApi from './audioMix/AudioMixApi';
import DenoiseHqdn3dApi from './denoiseHqdn3d/DenoiseHqdn3dApi';
import EbuR128SinglePassApi from './ebuR128SinglePass/EbuR128SinglePassApi';
import TextApi from './text/TextApi';
import InterlaceApi from './interlace/InterlaceApi';
import UnsharpApi from './unsharp/UnsharpApi';
import ScaleApi from './scale/ScaleApi';
import Filter from '../../models/Filter';
import PaginationResponse from '../../models/PaginationResponse';
import {FilterListQueryParams, FilterListQueryParamsBuilder} from './FilterListQueryParams';

/**
 * FiltersApi - object-oriented interface
 * @export
 * @class FiltersApi
 * @extends {BaseAPI}
 */
export default class FiltersApi extends BaseAPI {
  public type: TypeApi;
  public conform: ConformApi;
  public watermark: WatermarkApi;
  public audioVolume: AudioVolumeApi;
  public azureSpeechToCaptions: AzureSpeechToCaptionsApi;
  public enhancedWatermark: EnhancedWatermarkApi;
  public crop: CropApi;
  public rotate: RotateApi;
  public deinterlace: DeinterlaceApi;
  public enhancedDeinterlace: EnhancedDeinterlaceApi;
  public audioMix: AudioMixApi;
  public denoiseHqdn3d: DenoiseHqdn3dApi;
  public ebuR128SinglePass: EbuR128SinglePassApi;
  public text: TextApi;
  public interlace: InterlaceApi;
  public unsharp: UnsharpApi;
  public scale: ScaleApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.type = new TypeApi(configuration);
    this.conform = new ConformApi(configuration);
    this.watermark = new WatermarkApi(configuration);
    this.audioVolume = new AudioVolumeApi(configuration);
    this.azureSpeechToCaptions = new AzureSpeechToCaptionsApi(configuration);
    this.enhancedWatermark = new EnhancedWatermarkApi(configuration);
    this.crop = new CropApi(configuration);
    this.rotate = new RotateApi(configuration);
    this.deinterlace = new DeinterlaceApi(configuration);
    this.enhancedDeinterlace = new EnhancedDeinterlaceApi(configuration);
    this.audioMix = new AudioMixApi(configuration);
    this.denoiseHqdn3d = new DenoiseHqdn3dApi(configuration);
    this.ebuR128SinglePass = new EbuR128SinglePassApi(configuration);
    this.text = new TextApi(configuration);
    this.interlace = new InterlaceApi(configuration);
    this.unsharp = new UnsharpApi(configuration);
    this.scale = new ScaleApi(configuration);
  }

  /**
   * @summary Get Filter Details
   * @param {string} filterId Id of the filter
   * @throws {BitmovinError}
   * @memberof FiltersApi
   */
  public get(filterId: string): Promise<Filter> {
    const pathParamMap = {
      filter_id: filterId
    };
    return this.restClient.get<Filter>('/encoding/filters/{filter_id}', pathParamMap).then((response) => {
      return map(response, Filter);
    });
  }

  /**
   * @summary List all Filters
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof FiltersApi
   */
  public list(queryParameters?: FilterListQueryParams | ((q: FilterListQueryParamsBuilder) => FilterListQueryParamsBuilder)): Promise<PaginationResponse<Filter>> {
    let queryParams: FilterListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new FilterListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<Filter>>('/encoding/filters', {}, queryParams).then((response) => {
      return new PaginationResponse<Filter>(response, Filter);
    });
  }
}
